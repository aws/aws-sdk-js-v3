import {
  Condition,
  ScanCommand as __ScanCommand,
  ScanCommandInput as __ScanCommandInput,
  ScanCommandOutput as __ScanCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type ScanCommandInput = Omit<
  __ScanCommandInput,
  "ScanFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"
> & {
  ScanFilter?: {
    [key: string]: Omit<Condition, "AttributeValueList"> & { AttributeValueList: NativeAttributeValue[] };
  };
  ExclusiveStartKey?: { [key: string]: NativeAttributeValue };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type ScanCommandOutput = Omit<__ScanCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: { [key: string]: NativeAttributeValue }[];
  LastEvaluatedKey?: { [key: string]: NativeAttributeValue };
};

export class ScanCommand extends $Command<ScanCommandInput, ScanCommandOutput, DynamoDBDocumentClientResolvedConfig> {
  constructor(readonly input: ScanCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<ScanCommandInput, ScanCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfiguration || {};
    const command = new __ScanCommand({
      ...this.input,
      ...(this.input.ScanFilter && {
        ScanFilter: Object.entries(this.input.ScanFilter).reduce(
          (acc, [key, condition]) => ({
            ...acc,
            [key]: {
              ...condition,
              ...(condition.AttributeValueList && {
                AttributeValueList: condition.AttributeValueList.map((value) => marshall(value, marshallOptions)),
              }),
            },
          }),
          {}
        ),
      }),
      ...(this.input.ExclusiveStartKey && {
        ExclusiveStartKey: marshall(this.input.ExclusiveStartKey, marshallOptions),
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
                ...(data.output.Items && {
                  Items: data.output.Items.map((item) => unmarshall(item, unmarshallOptions)),
                }),
                ...(data.output.LastEvaluatedKey && {
                  LastEvaluatedKey: unmarshall(data.output.LastEvaluatedKey, unmarshallOptions),
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
