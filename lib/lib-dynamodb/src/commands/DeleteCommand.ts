import {
  DeleteItemCommand,
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type DeleteCommandInput = Omit<DeleteItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type DeleteCommandOutput = Omit<DeleteItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class DeleteCommand extends $Command<
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: DeleteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    const command = new DeleteItemCommand({
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
                ...(data.output.Attributes && {
                  Attributes: unmarshall(
                    data.output.Attributes,
                    configuration.translateConfiguration?.unmarshallOptions
                  ),
                }),
              } as DeleteCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
