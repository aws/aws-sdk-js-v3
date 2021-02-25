import {
  Get,
  ItemResponse,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransactGetItem,
  TransactGetItemsCommand,
  TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type TransactGetCommandInput = Omit<TransactGetItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactGetItem, "Get"> & {
        Get: Omit<Get, "Key"> & { Key: { [key: string]: NativeAttributeValue } | undefined };
      })[]
    | undefined;
};

export type TransactGetCommandOutput = Omit<TransactGetItemsCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & { Item?: { [key: string]: NativeAttributeValue } })[];
};

export class TransactGetCommand extends $Command<
  TransactGetCommandInput,
  TransactGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: TransactGetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<TransactGetCommandInput, TransactGetCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfiguration || {};
    const command = new TransactGetItemsCommand({
      ...this.input,
      ...(this.input.TransactItems && {
        TransactItems: this.input.TransactItems.map((transactItem) => ({
          ...transactItem,
          Get: {
            ...transactItem.Get,
            Key: marshall(transactItem.Get.Key, marshallOptions),
          },
        })),
      }),
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
                ...(data.output.Responses && {
                  Responses: data.output.Responses.map((response) => ({
                    ...response,
                    ...(response.Item && {
                      Item: unmarshall(response.Item, unmarshallOptions),
                    }),
                  })),
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
