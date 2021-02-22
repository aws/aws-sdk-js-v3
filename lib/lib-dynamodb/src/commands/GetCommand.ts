import {
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type GetCommandInput = Omit<GetItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type GetCommandOutput = Omit<GetItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class GetCommand extends $Command<GetCommandInput, GetCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  constructor(readonly input: GetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<GetCommandInput, GetCommandOutput> {
    const command = new GetItemCommand({
      ...this.input,
      Key: marshall(this.input.Key, configuration.translateConfiguration?.marshallOptions),
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
                ...(data.output.Item && {
                  Item: unmarshall(data.output.Item, configuration.translateConfiguration?.unmarshallOptions),
                }),
              } as GetCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
