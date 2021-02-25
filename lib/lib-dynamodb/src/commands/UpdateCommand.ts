import {
  AttributeValueUpdate,
  ExpectedAttributeValue,
  ServiceInputTypes,
  ServiceOutputTypes,
  UpdateItemCommand,
  UpdateItemCommandInput,
  UpdateItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { DocClientItemCollectionMetrics } from "./types";

export type UpdateCommandInput = Omit<
  UpdateItemCommandInput,
  "Item" | "Value" | "Expected" | "ExpressionAttributeValues"
> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
  AttributeUpdates?: { [key: string]: Omit<AttributeValueUpdate, "Value"> & { Value: NativeAttributeValue } };
  Expected?: { [key: string]: Omit<ExpectedAttributeValue, "Value"> & { Value: NativeAttributeValue } };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type UpdateCommandOutput = Omit<UpdateItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: { [key: string]: NativeAttributeValue };
  ItemCollectionMetrics?: DocClientItemCollectionMetrics;
};

export class UpdateCommand extends $Command<
  UpdateCommandInput,
  UpdateCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: UpdateCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<UpdateCommandInput, UpdateCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfiguration || {};
    const command = new UpdateItemCommand({
      ...this.input,
      Key: marshall(this.input.Key, marshallOptions),
      ...(this.input.AttributeUpdates && {
        AttributeUpdates: Object.entries(this.input.AttributeUpdates).reduce(
          (acc, [tableName, attributeValueUpdate]) => ({
            ...acc,
            [tableName]: marshall(attributeValueUpdate, marshallOptions),
          }),
          {}
        ),
      }),
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
