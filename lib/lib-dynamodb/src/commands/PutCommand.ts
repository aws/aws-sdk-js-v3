import {
  ExpectedAttributeValue,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { DocClientItemCollectionMetrics } from "./types";

export type PutCommandInput = Omit<
  PutItemCommandInput,
  "Item" | "ExpectedAttributeValue" | "ExpressionAttributeValues"
> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
  Expected?: { [key: string]: Omit<ExpectedAttributeValue, "Value"> & { Value: NativeAttributeValue } };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type PutCommandOutput = Omit<PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: DocClientItemCollectionMetrics;
};

export class PutCommand extends $Command<PutCommandInput, PutCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  constructor(readonly input: PutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfiguration || {};
    const command = new PutItemCommand({
      ...this.input,
      Item: marshall(this.input.Item, marshallOptions),
      ...(this.input.Expected && {
        Expected: Object.entries(this.input.Expected).reduce(
          (acc, [tableName, expectedAttributeValue]) => ({
            ...acc,
            [tableName]: marshall(expectedAttributeValue, marshallOptions),
          }),
          {}
        ),
      }),
      ...(this.input.ExpressionAttributeValues && {
        ExpressionAttributeValues: marshall(this.input.ExpressionAttributeValues, marshallOptions),
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
                ...(data.output.Attributes && {
                  Attributes: unmarshall(data.output.Attributes, unmarshallOptions),
                }),
                ...(data.output.ItemCollectionMetrics && {
                  ItemCollectionMetrics: {
                    ...data.output.ItemCollectionMetrics,
                    ...(data.output.ItemCollectionMetrics.ItemCollectionKey && {
                      ItemCollectionKey: unmarshall(
                        data.output.ItemCollectionMetrics.ItemCollectionKey,
                        unmarshallOptions
                      ),
                    }),
                  },
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
