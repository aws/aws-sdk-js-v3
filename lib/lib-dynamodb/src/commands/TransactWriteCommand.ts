import {
  Delete,
  Get,
  ItemResponse,
  Put,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransactGetItem,
  TransactWriteItem,
  TransactWriteItemsCommand,
  TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput,
  Update,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { DocClientItemCollectionMetrics } from "./types";

export type TransactWriteCommandInput = Omit<TransactWriteItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactWriteItem, "Put" | "Delete" | "Update"> & {
        Put: Omit<Put, "Item" | "ExpressionAttributeValues"> & {
          Item: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
        Delete: Omit<Delete, "Key" | "ExpressionAttributeValues"> & {
          Key: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
        Update: Omit<Update, "Key" | "ExpressionAttributeValues"> & {
          Key: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
      })[]
    | undefined;
};

export type TransactWriteCommandOutput = Omit<TransactWriteItemsCommandOutput, "ItemCollectionMetrics"> & {
  ItemCollectionMetrics?: { [key: string]: DocClientItemCollectionMetrics[] };
};

export class TransactWriteCommand extends $Command<
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: TransactWriteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<TransactWriteCommandInput, TransactWriteCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfiguration || {};
    const command = new TransactWriteItemsCommand({
      ...this.input,
      ...(this.input.TransactItems && {
        TransactItems: this.input.TransactItems.map((transactItem) => ({
          ...transactItem,
          Put: {
            ...transactItem.Put,
            Item: marshall(transactItem.Put.Item, marshallOptions),
            ...(transactItem.Put.ExpressionAttributeValues && {
              ExpressionAttributeValues: marshall(transactItem.Put.ExpressionAttributeValues, marshallOptions),
            }),
          },
          Delete: {
            ...transactItem.Delete,
            Key: marshall(transactItem.Delete.Key, marshallOptions),
            ...(transactItem.Delete.ExpressionAttributeValues && {
              ExpressionAttributeValues: marshall(transactItem.Delete.ExpressionAttributeValues, marshallOptions),
            }),
          },
          Update: {
            ...transactItem.Update,
            Key: marshall(transactItem.Update.Key, marshallOptions),
            ...(transactItem.Update.ExpressionAttributeValues && {
              ExpressionAttributeValues: marshall(transactItem.Update.ExpressionAttributeValues, marshallOptions),
            }),
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
                ...(data.output.ItemCollectionMetrics && {
                  ItemCollectionMetrics: Object.entries(data.output.ItemCollectionMetrics).reduce(
                    (acc, [tableName, itemCollectionMetrics]) => ({
                      ...acc,
                      [tableName]: itemCollectionMetrics.map((itemCollectionMetric) => ({
                        ...itemCollectionMetric,
                        ...(itemCollectionMetric.ItemCollectionKey && {
                          ItemCollectionKey: unmarshall(itemCollectionMetric.ItemCollectionKey, unmarshallOptions),
                        }),
                      })),
                    }),
                    {}
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
