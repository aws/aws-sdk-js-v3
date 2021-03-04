import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  DeleteRequest,
  ItemCollectionMetrics,
  PutRequest,
  ServiceInputTypes,
  ServiceOutputTypes,
  WriteRequest,
  BatchWriteItemCommand as __BatchWriteItemCommand,
  BatchWriteItemCommandInput as __BatchWriteItemCommandInput,
  BatchWriteItemCommandOutput as __BatchWriteItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type BatchWriteCommandInput = Omit<__BatchWriteItemCommandInput, "RequestItems"> & {
  RequestItems:
    | {
        [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
          PutRequest?: Omit<PutRequest, "Item"> & {
            Item: { [key: string]: NativeAttributeValue } | undefined;
          };
          DeleteRequest?: Omit<DeleteRequest, "Key"> & {
            Key: { [key: string]: NativeAttributeValue } | undefined;
          };
        })[];
      }
    | undefined;
};

export type BatchWriteCommandOutput = Omit<
  __BatchWriteItemCommandOutput,
  "UnprocessedItems" | "ItemCollectionMetrics"
> & {
  UnprocessedItems?: {
    [key: string]: (Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
      PutRequest?: Omit<PutRequest, "Item"> & {
        Item: { [key: string]: NativeAttributeValue } | undefined;
      };
      DeleteRequest?: Omit<DeleteRequest, "Key"> & {
        Key: { [key: string]: NativeAttributeValue } | undefined;
      };
    })[];
  };
  ItemCollectionMetrics?: {
    [key: string]: (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: { [key: string]: NativeAttributeValue };
    })[];
  };
};

export class BatchWriteCommand extends $Command<
  BatchWriteCommandInput,
  BatchWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchWriteCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
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
    const inputKeyNodes = [
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
    const outputKeyNodes = [
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

    const command = new __BatchWriteItemCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, outputKeyNodes, unmarshallOptions),
      };
    };
  }
  // Start section: command_body_extra
  // End section: command_body_extra
}
