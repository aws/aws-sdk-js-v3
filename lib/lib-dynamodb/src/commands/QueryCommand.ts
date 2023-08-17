// smithy-typescript generated code
import {
  Condition,
  QueryCommand as __QueryCommand,
  QueryCommandInput as __QueryCommandInput,
  QueryCommandOutput as __QueryCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type QueryCommandInput = Omit<
  __QueryCommandInput,
  "KeyConditions" | "QueryFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"
> & {
  KeyConditions?: Record<
    string,
    Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    }
  >;
  QueryFilter?: Record<
    string,
    Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: NativeAttributeValue[];
    }
  >;
  ExclusiveStartKey?: Record<string, NativeAttributeValue>;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
};

/**
 * @public
 */
export type QueryCommandOutput = Omit<__QueryCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: Record<string, NativeAttributeValue>[];
  LastEvaluatedKey?: Record<string, NativeAttributeValue>;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * QueryCommand operation from {@link @aws-sdk/client-dynamodb#QueryCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class QueryCommand extends DynamoDBDocumentClientCommand<
  QueryCommandInput,
  QueryCommandOutput,
  __QueryCommandInput,
  __QueryCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    {
      key: "KeyConditions",
      children: {
        children: [{ key: "AttributeValueList" }],
      },
    },
    {
      key: "QueryFilter",
      children: {
        children: [{ key: "AttributeValueList" }],
      },
    },
    { key: "ExclusiveStartKey" },
    { key: "ExpressionAttributeValues" },
  ];
  protected readonly outputKeyNodes = [{ key: "Items" }, { key: "LastEvaluatedKey" }];

  protected readonly clientCommand: __QueryCommand;
  public readonly middlewareStack: MiddlewareStack<
    QueryCommandInput | __QueryCommandInput,
    QueryCommandOutput | __QueryCommandOutput
  >;

  constructor(readonly input: QueryCommandInput) {
    super();
    this.clientCommand = new __QueryCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryCommandInput, QueryCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
