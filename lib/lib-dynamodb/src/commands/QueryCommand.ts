import {
  QueryCommand as __QueryCommand,
  QueryCommandInput as __QueryCommandInput,
  QueryCommandOutput as __QueryCommandOutput,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { marshall, NativeAttributeValue, unmarshall } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";

export type QueryCommandInput = Omit<__QueryCommandInput, "ExclusiveStartKey" | "ExpressionAttributeValues"> & {
  ExclusiveStartKey?: { [key: string]: NativeAttributeValue };
  ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
};

export type QueryCommandOutput = Omit<__QueryCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: { [key: string]: NativeAttributeValue }[];
  LastEvaluatedKey?: { [key: string]: NativeAttributeValue };
};

export class QueryCommand extends $Command<
  QueryCommandInput,
  QueryCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  constructor(readonly input: QueryCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    const command = new __QueryCommand({
      ...this.input,
      ExclusiveStartKey: marshall(this.input.ExclusiveStartKey, configuration.translateConfiguration?.marshallOptions),
      ExpressionAttributeValues: marshall(
        this.input.ExpressionAttributeValues,
        configuration.translateConfiguration?.marshallOptions
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
                ...(data.output.Items && {
                  Items: data.output.Items.map((item) =>
                    unmarshall(item, configuration.translateConfiguration?.unmarshallOptions)
                  ),
                }),
                ...(data.output.LastEvaluatedKey && {
                  LastEvaluatedKey: unmarshall(
                    data.output.LastEvaluatedKey,
                    configuration.translateConfiguration?.unmarshallOptions
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
