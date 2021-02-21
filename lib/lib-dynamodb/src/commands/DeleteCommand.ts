import {
  DeleteItemCommand,
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { TranslateConfiguration } from "./types";

export type DeleteCommandInput = Omit<DeleteItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type DeleteCommandOutput = Omit<DeleteItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class DeleteCommand extends $Command<DeleteCommandInput, DeleteCommandOutput, DynamoDBClientResolvedConfig> {
  private command: DeleteItemCommand;

  constructor(readonly input: DeleteCommandInput, private readonly translateConfiguration?: TranslateConfiguration) {
    super();
    this.command = new DeleteItemCommand({
      ...input,
      Key: marshall(input.Key, translateConfiguration?.marshallOptions),
    });
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    const handler = this.command.resolveMiddleware(clientStack, configuration, options);

    return () =>
      new Promise((resolve, reject) => {
        handler(this.command)
          .then((data) => {
            resolve({
              ...data,
              output: {
                ...data.output,
                ...(data.output.Attributes && {
                  Attributes: unmarshall(data.output.Attributes, this.translateConfiguration?.unmarshallOptions),
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
