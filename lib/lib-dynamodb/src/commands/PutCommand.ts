import {
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type PutCommandInput = Omit<PutItemCommandInput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
};

export type PutCommandOutput = Omit<PutItemCommandOutput, "Attributes"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
};

export class PutCommand extends $Command<PutCommandInput, PutCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  constructor(readonly input: PutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    const command = new PutItemCommand({
      ...this.input,
      Item: marshall(this.input.Item, configuration.translateConfiguration?.marshallOptions),
    });
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return () =>
      new Promise((resolve, reject) => {
        handler(command)
          .then((data) => {
            resolve({
              ...data,
              output: {
                ...data.output,
                ...(data.output.Attributes && {
                  Attributes: unmarshall(
                    data.output.Attributes,
                    configuration.translateConfiguration?.unmarshallOptions
                  ),
                }),
              },
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
