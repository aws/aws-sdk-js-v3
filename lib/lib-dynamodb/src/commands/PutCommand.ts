// smithy-typescript generated code
import {
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  PutItemCommand as __PutItemCommand,
  PutItemCommandInput as __PutItemCommandInput,
  PutItemCommandOutput as __PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_MEMBERS, ALL_VALUES, SELF } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type PutCommandInput = Omit<__PutItemCommandInput, "Item" | "Expected" | "ExpressionAttributeValues"> & {
  Item: Record<string, NativeAttributeValue> | undefined;
  Expected?: Record<
    string,
    Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    }
  >;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
};

/**
 * @public
 */
export type PutCommandOutput = Omit<__PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: Record<string, NativeAttributeValue>;
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: Record<string, NativeAttributeValue>;
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * PutItemCommand operation from {@link @aws-sdk/client-dynamodb#PutItemCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class PutCommand extends DynamoDBDocumentClientCommand<
  PutCommandInput,
  PutCommandOutput,
  __PutItemCommandInput,
  __PutItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    Item: ALL_VALUES, // map with AttributeValue
    Expected: {
      "*": {
        Value: SELF,
        AttributeValueList: ALL_MEMBERS, // set/list of AttributeValue
      },
    },
    ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
  };
  protected readonly outputKeyNodes = {
    Attributes: ALL_VALUES, // map with AttributeValue
    ItemCollectionMetrics: {
      ItemCollectionKey: ALL_VALUES, // map with AttributeValue
    },
  };

  protected readonly clientCommand: __PutItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    PutCommandInput | __PutItemCommandInput,
    PutCommandOutput | __PutItemCommandOutput
  >;

  constructor(readonly input: PutCommandInput) {
    super();
    this.clientCommand = new __PutItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
