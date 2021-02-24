import {
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { DocClientItemCollectionMetrics, DocClientWriteRequest } from "./types";

export type BatchWriteCommandInput = Omit<BatchWriteItemCommandInput, "RequestItems"> & {
  RequestItems: { [key: string]: DocClientWriteRequest[] };
};

export type BatchWriteCommandOutput = Omit<
  BatchWriteItemCommandOutput,
  "UnprocessedItems" | "ItemCollectionMetrics"
> & {
  UnprocessedItems?: { [key: string]: DocClientWriteRequest[] };
  ItemCollectionMetrics?: { [key: string]: DocClientItemCollectionMetrics[] };
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
        (acc, [tableName, writeRequests]) => ({
          ...acc,
          [tableName]: writeRequests.map((writeRequest) => ({
            ...writeRequest,
            ...(writeRequest.PutRequest && {
              PutRequest: {
                Item: marshall(writeRequest.PutRequest.Item, configuration.translateConfiguration?.marshallOptions),
              },
            }),
            ...(writeRequest.DeleteRequest && {
              DeleteRequest: {
                Key: marshall(writeRequest.DeleteRequest.Key, configuration.translateConfiguration?.marshallOptions),
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
                    (acc, [tableName, writeRequests]) => ({
                      ...acc,
                      [tableName]: writeRequests.map((writeRequest) => ({
                        ...writeRequest,
                        ...(writeRequest.PutRequest && {
                          PutRequest: {
                            Item: unmarshall(
                              writeRequest.PutRequest.Item!,
                              configuration.translateConfiguration?.unmarshallOptions
                            ),
                          },
                        }),
                        ...(writeRequest.DeleteRequest && {
                          DeleteRequest: {
                            Key: unmarshall(
                              writeRequest.DeleteRequest.Key!,
                              configuration.translateConfiguration?.unmarshallOptions
                            ),
                          },
                        }),
                      })),
                    }),
                    {}
                  ),
                }),
                ...(data.output.ItemCollectionMetrics && {
                  ItemCollectionMetrics: Object.entries(data.output.ItemCollectionMetrics).reduce(
                    (acc, [tableName, itemCollectionMetrics]) => ({
                      ...acc,
                      [tableName]: itemCollectionMetrics.map((itemCollectionMetric) => ({
                        ...itemCollectionMetric,
                        ...(itemCollectionMetric.ItemCollectionKey && {
                          ItemCollectionKey: unmarshall(
                            itemCollectionMetric.ItemCollectionKey,
                            configuration.translateConfiguration?.unmarshallOptions
                          ),
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
