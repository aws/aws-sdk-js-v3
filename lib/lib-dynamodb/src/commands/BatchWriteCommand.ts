// smithy-typescript generated code
import {
  BatchWriteItemCommand as __BatchWriteItemCommand,
  BatchWriteItemCommandInput as __BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput as __BatchWriteItemCommandOutput,
  DeleteRequest,
  ItemCollectionMetrics,
  PutRequest,
  WriteRequest,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_VALUES } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type BatchWriteCommandInput = Omit<__BatchWriteItemCommandInput, "RequestItems"> & {
  RequestItems:
    | Record<
        string,
        (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
          PutRequest?: Omit<PutRequest, "Item"> & {
            Item: Record<string, NativeAttributeValue> | undefined;
          };
          DeleteRequest?: Omit<DeleteRequest, "Key"> & {
            Key: Record<string, NativeAttributeValue> | undefined;
          };
        })[]
      >
    | undefined;
};

/**
 * @public
 */
export type BatchWriteCommandOutput = Omit<
  __BatchWriteItemCommandOutput,
  "UnprocessedItems" | "ItemCollectionMetrics"
> & {
  UnprocessedItems?: Record<
    string,
    (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
      PutRequest?: Omit<PutRequest, "Item"> & {
        Item: Record<string, NativeAttributeValue> | undefined;
      };
      DeleteRequest?: Omit<DeleteRequest, "Key"> & {
        Key: Record<string, NativeAttributeValue> | undefined;
      };
    })[]
  >;
  ItemCollectionMetrics?: Record<
    string,
    (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: Record<string, NativeAttributeValue>;
    })[]
  >;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchWriteItemCommand operation from {@link @aws-sdk/client-dynamodb#BatchWriteItemCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class BatchWriteCommand extends DynamoDBDocumentClientCommand<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  __BatchWriteItemCommandInput,
  __BatchWriteItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    RequestItems: {
      "*": {
        "*": {
          PutRequest: {
            Item: ALL_VALUES, // map with AttributeValue
          },
          DeleteRequest: {
            Key: ALL_VALUES, // map with AttributeValue
          },
        },
      },
    },
  };
  protected readonly outputKeyNodes = {
    UnprocessedItems: {
      "*": {
        "*": {
          PutRequest: {
            Item: ALL_VALUES, // map with AttributeValue
          },
          DeleteRequest: {
            Key: ALL_VALUES, // map with AttributeValue
          },
        },
      },
    },
    ItemCollectionMetrics: {
      "*": {
        "*": {
          ItemCollectionKey: ALL_VALUES, // map with AttributeValue
        },
      },
    },
  };

  protected readonly clientCommand: __BatchWriteItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    BatchWriteCommandInput | __BatchWriteItemCommandInput,
    BatchWriteCommandOutput | __BatchWriteItemCommandOutput
  >;

  constructor(readonly input: BatchWriteCommandInput) {
    super();
    this.clientCommand = new __BatchWriteItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
