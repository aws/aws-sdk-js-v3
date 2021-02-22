import {
  DynamoDBClientResolvedConfig,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { NativeItemCommand } from "./NativeItemCommand";
import { TranslateConfiguration } from "./types";

export type GetCommandInput = Omit<GetItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type GetCommandOutput = Omit<GetItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class GetCommand extends NativeItemCommand<GetCommandInput, GetCommandOutput, DynamoDBClientResolvedConfig> {
  constructor(readonly input: GetCommandInput, public translateConfiguration?: TranslateConfiguration) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<GetCommandInput, GetCommandOutput> {
    const command = new GetItemCommand({
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
                ...(data.output.Item && {
                  Item: unmarshall(data.output.Item, this.translateConfiguration?.unmarshallOptions),
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
