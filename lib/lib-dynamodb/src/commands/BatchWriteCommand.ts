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
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

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
 * BatchWriteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchWriteCommand extends DynamoDBDocumentClientCommand<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  __BatchWriteItemCommandInput,
  __BatchWriteItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    {
      key: "RequestItems",
      children: {
        children: [
          { key: "PutRequest", children: [{ key: "Item" }] },
          { key: "DeleteRequest", children: [{ key: "Key" }] },
        ],
      },
    },
  ];
  protected readonly outputKeyNodes = [
    {
      key: "UnprocessedItems",
      children: {
        children: [
          { key: "PutRequest", children: [{ key: "Item" }] },
          { key: "DeleteRequest", children: [{ key: "Key" }] },
        ],
      },
    },
    {
      key: "ItemCollectionMetrics",
      children: {
        children: [{ key: "ItemCollectionKey" }],
      },
    },
  ];

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
