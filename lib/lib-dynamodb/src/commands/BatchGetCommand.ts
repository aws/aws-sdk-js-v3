import {
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { DocClientKeysAndAttributes } from "./types";

export type BatchGetCommandInput = Omit<BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems: { [key: string]: DocClientKeysAndAttributes };
};

export type BatchGetCommandOutput = Omit<BatchGetItemCommandOutput, "Responses" | "UnprocessedItems"> & {
  Responses?: { [key: string]: { [key: string]: NativeAttributeValue }[] };
  UnprocessedKeys?: { [key: string]: DocClientKeysAndAttributes };
};

export class BatchGetCommand extends $Command<
  BatchGetCommandInput,
  BatchGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: BatchGetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<BatchGetCommandInput, BatchGetCommandOutput> {
    const command = new BatchGetItemCommand({
      ...this.input,
      RequestItems: Object.entries(this.input.RequestItems).reduce(
        (acc, [tableName, keysAndAttributes]) => ({
          ...acc,
          [tableName]: {
            ...keysAndAttributes,
            ...(keysAndAttributes.Keys && {
              Keys: keysAndAttributes.Keys.map((key) =>
                marshall(key, configuration.translateConfiguration?.marshallOptions)
              ),
            }),
          },
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
                ...(data.output.UnprocessedKeys && {
                  UnprocessedKeys: Object.entries(data.output.UnprocessedKeys).reduce(
                    (acc, [tableName, keysAndAttributes]) => ({
                      ...acc,
                      [tableName]: {
                        ...keysAndAttributes,
                        ...(keysAndAttributes.Keys && {
                          Keys: keysAndAttributes.Keys.map((key) =>
                            unmarshall(key, configuration.translateConfiguration?.unmarshallOptions)
                          ),
                        }),
                      },
                    }),
                    {}
                  ),
                }),
                ...(data.output.Responses && {
                  Responses: Object.entries(data.output.Responses).reduce(
                    (acc, [tableName, results]) => ({
                      ...acc,
                      [tableName]: results.map((result) =>
                        unmarshall(result, configuration.translateConfiguration?.unmarshallOptions)
                      ),
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
