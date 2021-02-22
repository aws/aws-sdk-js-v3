import {
  DeleteItemCommand,
  DeleteItemCommandInput,
  DeleteItemCommandOutput,
  DynamoDBClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { NativeItemCommand } from "./NativeItemCommand";
import { TranslateConfiguration } from "./types";

export type DeleteCommandInput = Omit<DeleteItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type DeleteCommandOutput = Omit<DeleteItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class DeleteCommand extends NativeItemCommand<
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBClientResolvedConfig
> {
  constructor(readonly input: DeleteCommandInput, public translateConfiguration?: TranslateConfiguration) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    const command = new DeleteItemCommand({
      ...this.input,
      Key: marshall(this.input.Key, this.translateConfiguration?.marshallOptions),
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
