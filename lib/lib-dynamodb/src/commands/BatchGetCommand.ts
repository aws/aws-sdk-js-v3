import {
  BatchGetItemCommand,
  BatchGetItemCommandInput,
  BatchGetItemCommandOutput,
  KeysAndAttributes,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type BatchGetCommandInput = Omit<BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems: {
    [key: string]: Omit<KeysAndAttributes, "Keys"> & {
      Keys?: { [key: string]: NativeAttributeValue }[];
    };
  };
};

export type BatchGetCommandOutput = Omit<BatchGetItemCommandOutput, "UnprocessedItems" | "ItemCollectionMetrics"> & {
  UnprocessedKeys: {
    [key: string]: Omit<KeysAndAttributes, "Keys"> & {
      Keys?: { [key: string]: NativeAttributeValue }[];
    };
  };
  Responses?: { [key: string]: { [key: string]: NativeAttributeValue }[] };
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
        (acc: any, [key, value]: [string, any]) => ({
          ...acc,
          [key]: {
            ...value,
            Keys: value.Keys.map((key: any) => marshall(key, configuration.translateConfiguration?.marshallOptions)),
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
                    (acc: any, [key, value]: [string, any]) => ({
                      ...acc,
                      [key]: value.map((keysAndAttributes: any) => ({
                        ...keysAndAttributes,
                        ...(keysAndAttributes.Keys && {
                          Keys: keysAndAttributes.Keys.map((key: any) =>
                            unmarshall(key, configuration.translateConfiguration?.unmarshallOptions)
                          ),
                        }),
                      })),
                    }),
                    {}
                  ),
                }),
                ...(data.output.Responses && {
                  Responses: Object.entries(data.output.Responses).reduce(
                    (acc: any, [key, value]: [string, any]) => ({
                      ...acc,
                      [key]: value.map((val: any) =>
                        unmarshall(val, configuration.translateConfiguration?.unmarshallOptions)
                      ),
                    }),
                    {}
                  ),
                }),
              } as BatchGetCommandOutput,
            });
          })
          .catch((err) => {
            reject(err);
          });
      });
  }
}
