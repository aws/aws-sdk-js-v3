// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import type { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_MEMBERS, ALL_VALUES, SELF } from "../commands/utils";
import type {
  DynamoDBDocumentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBDocumentClient";
import { UpdateItemCommand as __UpdateItemCommand } from "@aws-sdk/client-dynamodb";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type UpdateCommandInput = Omit<__UpdateItemCommandInput, "Key" | "AttributeUpdates" | "Expected" | "ExpressionAttributeValues"> & {
  Key: Record<string, JsAttributeValue> | undefined;
  AttributeUpdates?: Record<
    string,
    Omit<AttributeValueUpdate, "Value"> & {
      Value?: JsAttributeValue | undefined;
    }
  > | undefined;
  Expected?: Record<
    string,
    Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: JsAttributeValue | undefined;
      AttributeValueList?: JsAttributeValue[] | undefined;
    }
  > | undefined;
  ExpressionAttributeValues?: Record<string, JsAttributeValue> | undefined;
};

/**
 * @public
 */
export type UpdateCommandOutput = Omit<__UpdateItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: Record<string, JsAttributeValue> | undefined;
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: Record<string, JsAttributeValue> | undefined;
  } | undefined;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * UpdateItemCommand operation from {@link @aws-sdk/client-dynamodb#UpdateItemCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class UpdateCommand extends DynamoDBDocumentClientCommand<
  UpdateCommandInput,
  UpdateCommandOutput,
  __UpdateItemCommandInput,
  __UpdateItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    Key: ALL_VALUES, // map with AttributeValue
    AttributeUpdates: {
      "*": {
        Value: SELF,
      },
    },
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

  protected readonly clientCommand: __UpdateItemCommand;
  public readonly middlewareStack: MiddlewareStack<any, any>;

  constructor(readonly input: UpdateCommandInput) {
    super();
    this.clientCommand = new __UpdateItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCommandInput, UpdateCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand) as any;
  }
}

import type {
  AttributeValueUpdate,
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  UpdateItemCommandInput as __UpdateItemCommandInput,
  UpdateItemCommandOutput as __UpdateItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import type {
  JsAttributeValue,
} from "@aws-sdk/util-dynamodb";
