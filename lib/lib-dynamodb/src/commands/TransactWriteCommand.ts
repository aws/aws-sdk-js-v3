// smithy-typescript generated code
import { TransactWriteItemsCommand as __TransactWriteItemsCommand } from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import type { Handler, MiddlewareStack } from "@smithy/types";
import { type HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_VALUES } from "../commands/utils";
import type {
  DynamoDBDocumentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type TransactWriteConditionCheck = Omit<ConditionCheck, "Key" | "ExpressionAttributeValues"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type TransactWritePut = Omit<Put, "Item" | "ExpressionAttributeValues"> & {
  Item: Record<string, NativeAttributeValue> | undefined;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type TransactWriteDelete = Omit<Delete, "Key" | "ExpressionAttributeValues"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type TransactWriteUpdate = Omit<Update, "Key" | "ExpressionAttributeValues"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type TransactWriteItem = Omit<ClientTransactWriteItem, "ConditionCheck" | "Put" | "Delete" | "Update"> & {
  ConditionCheck?: TransactWriteConditionCheck | undefined;
  Put?: TransactWritePut | undefined;
  Delete?: TransactWriteDelete | undefined;
  Update?: TransactWriteUpdate | undefined;
};

/**
 * @public
 */
export type TransactWriteItemCollectionMetrics = Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
  ItemCollectionKey?: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type TransactWriteCommandInput = Omit<__TransactWriteItemsCommandInput, "TransactItems"> & {
  TransactItems: TransactWriteItem[] | undefined;
};

/**
 * @public
 */
export type TransactWriteCommandOutput = Omit<__TransactWriteItemsCommandOutput, "ItemCollectionMetrics"> & {
  ItemCollectionMetrics?: Record<string, TransactWriteItemCollectionMetrics[]> | undefined;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactWriteItemsCommand operation from {@link @aws-sdk/client-dynamodb#TransactWriteItemsCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class TransactWriteCommand extends DynamoDBDocumentClientCommand<
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  __TransactWriteItemsCommandInput,
  __TransactWriteItemsCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    TransactItems: {
      "*": {
        ConditionCheck: {
          Key: ALL_VALUES, // map with AttributeValue
          ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
        },
        Put: {
          Item: ALL_VALUES, // map with AttributeValue
          ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
        },
        Delete: {
          Key: ALL_VALUES, // map with AttributeValue
          ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
        },
        Update: {
          Key: ALL_VALUES, // map with AttributeValue
          ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
        },
      },
    },
  };
  protected readonly outputKeyNodes = {
    ItemCollectionMetrics: {
      "*": {
        "*": {
          ItemCollectionKey: ALL_VALUES, // map with AttributeValue
        },
      },
    },
  };

  protected readonly clientCommand: __TransactWriteItemsCommand;
  public readonly middlewareStack: MiddlewareStack<
    TransactWriteCommandInput | __TransactWriteItemsCommandInput,
    TransactWriteCommandOutput | __TransactWriteItemsCommandOutput
  >;

  constructor(readonly input: TransactWriteCommandInput) {
    super();
    this.clientCommand = new __TransactWriteItemsCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactWriteCommandInput, TransactWriteCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}

import type {
  ConditionCheck,
  Delete,
  ItemCollectionMetrics,
  Put,
  TransactWriteItem as ClientTransactWriteItem,
  TransactWriteItemsCommandInput as __TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput as __TransactWriteItemsCommandOutput,
  Update,
} from "@aws-sdk/client-dynamodb";
import type { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
