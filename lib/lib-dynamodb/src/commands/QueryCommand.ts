// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import type { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_MEMBERS, ALL_VALUES } from "../commands/utils";
import type {
  DynamoDBDocumentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBDocumentClient";
import { QueryCommand as __QueryCommand } from "@aws-sdk/client-dynamodb";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type QueryCommandInput = Omit<__QueryCommandInput, "KeyConditions" | "QueryFilter" | "ExclusiveStartKey" | "ExpressionAttributeValues"> & {
  KeyConditions?: Record<
    string,
    Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: JsAttributeValue[] | undefined;
    }
  > | undefined;
  QueryFilter?: Record<
    string,
    Omit<Condition, "AttributeValueList"> & {
      AttributeValueList?: JsAttributeValue[] | undefined;
    }
  > | undefined;
  ExclusiveStartKey?: Record<string, JsAttributeValue> | undefined;
  ExpressionAttributeValues?: Record<string, JsAttributeValue> | undefined;
};

/**
 * @public
 */
export type QueryCommandOutput = Omit<__QueryCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: Record<string, JsAttributeValue>[] | undefined;
  LastEvaluatedKey?: Record<string, JsAttributeValue> | undefined;
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
  protected readonly inputKeyNodes = {
    KeyConditions: {
      "*": {
        AttributeValueList: ALL_MEMBERS, // set/list of AttributeValue
      },
    },
    QueryFilter: {
      "*": {
        AttributeValueList: ALL_MEMBERS, // set/list of AttributeValue
      },
    },
    ExclusiveStartKey: ALL_VALUES, // map with AttributeValue
    ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
  };
  protected readonly outputKeyNodes = {
    Items: {
      "*": ALL_VALUES, // map with AttributeValue
    },
    LastEvaluatedKey: ALL_VALUES, // map with AttributeValue
  };

  protected readonly clientCommand: __QueryCommand;
  public readonly middlewareStack: MiddlewareStack<any, any>;

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

    return async () => handler(this.clientCommand) as any;
  }
}

import type {
  Condition,
  QueryCommandInput as __QueryCommandInput,
  QueryCommandOutput as __QueryCommandOutput,
} from "@aws-sdk/client-dynamodb";
import type {
  JsAttributeValue,
} from "@aws-sdk/util-dynamodb";
