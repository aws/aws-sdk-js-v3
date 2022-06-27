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
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { marshallInput, unmarshallOutput } from "../commands/utils";
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
export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
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
  private readonly outputKeyNodes = [
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

  constructor(readonly input: BatchWriteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchWriteCommandInput, BatchWriteCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const command = new __BatchWriteItemCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
    const stack = clientStack.concat(this.middlewareStack);
    const handler = command.resolveMiddleware(stack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
