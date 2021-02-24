import {
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
  DeleteRequest,
  ItemCollectionMetrics,
  PutRequest,
  ServiceInputTypes,
  ServiceOutputTypes,
  WriteRequest,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type BatchWriteCommandInput = Omit<BatchWriteItemCommandInput, "RequestItems"> & {
  RequestItems: {
    [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
      PutRequest?: Omit<PutRequest, "Item"> & {
        Item: { [key: string]: NativeAttributeValue };
      };
      DeleteRequest?: Omit<DeleteRequest, "Key"> & {
        Key: { [key: string]: NativeAttributeValue };
      };
    })[];
  };
};

export type BatchWriteCommandOutput = Omit<
  BatchWriteItemCommandOutput,
  "UnprocessedItems" | "ItemCollectionMetrics"
> & {
  UnprocessedItems: {
    [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
      PutRequest?: Omit<PutRequest, "Item"> & {
        Item: { [key: string]: NativeAttributeValue };
      };
      DeleteRequest?: Omit<DeleteRequest, "Key"> & {
        Key: { [key: string]: NativeAttributeValue };
      };
    })[];
  };
  ItemCollectionMetrics?: {
    [key: string]: (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: { [key: string]: NativeAttributeValue };
    })[];
  };
};

export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: BatchWriteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    const command = new BatchWriteItemCommand({
      ...this.input,
      RequestItems: Object.entries(this.input.RequestItems).reduce(
        (acc: any, [key, value]: [string, any]) => ({
          ...acc,
          [key]: value.map((writeItem: any) => ({
            ...writeItem,
            ...(writeItem.PutRequest && {
              PutRequest: {
                Item: marshall(writeItem.PutRequest.Item, configuration.translateConfiguration?.marshallOptions),
              },
            }),
            ...(writeItem.DeleteRequest && {
              DeleteRequest: {
                Key: marshall(writeItem.DeleteRequest.Key, configuration.translateConfiguration?.marshallOptions),
              },
            }),
          })),
        }),
        {}
      ),
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
                ...(data.output.UnprocessedItems && {
                  UnprocessedItems: Object.entries(data.output.UnprocessedItems).reduce(
                    (acc: any, [key, value]: [string, any]) => ({
                      ...acc,
                      [key]: value.map((writeItem: any) => ({
                        ...writeItem,
                        ...(writeItem.PutRequest && {
                          PutRequest: unmarshall(
                            writeItem.PutRequest,
                            configuration.translateConfiguration?.unmarshallOptions
                          ),
                        }),
                        ...(writeItem.DeleteRequest && {
                          DeleteRequest: unmarshall(
                            writeItem.DeleteRequest,
                            configuration.translateConfiguration?.unmarshallOptions
                          ),
                        }),
                      })),
                    }),
                    {}
                  ),
                }),
                ...(data.output.ItemCollectionMetrics && {
                  ItemCollectionMetrics: Object.entries(data.output.ItemCollectionMetrics).reduce(
                    (acc: any, [key, value]: [string, any]) => ({
                      ...acc,
                      [key]: {
                        ...value,
                        ...(value.ItemCollectionKey && {
                          ItemCollectionKey: unmarshall(
                            value.ItemCollectionKey,
                            configuration.translateConfiguration?.unmarshallOptions
                          ),
                        }),
                      },
                    }),
                    {}
                  ),
                }),
              } as BatchWriteCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
