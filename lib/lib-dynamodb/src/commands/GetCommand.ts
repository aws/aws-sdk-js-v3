import {
  DynamoDBClientResolvedConfig,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { TranslateConfiguration } from "./types";

export type GetCommandInput = Omit<GetItemCommandInput, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type GetCommandOutput = Omit<GetItemCommandOutput, "Item"> & {
  Item: { [key: string]: NativeAttributeValue };
};

export class GetCommand extends $Command<GetCommandInput, GetCommandOutput, DynamoDBClientResolvedConfig> {
  private command: GetItemCommand;

  constructor(readonly input: GetCommandInput, private readonly translateConfiguration?: TranslateConfiguration) {
    super();
    this.command = new GetItemCommand({
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
  ): Handler<GetCommandInput, GetCommandOutput> {
    const handler = this.command.resolveMiddleware(clientStack, configuration, options);

    return () =>
      new Promise((resolve, reject) => {
        handler(this.command)
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
