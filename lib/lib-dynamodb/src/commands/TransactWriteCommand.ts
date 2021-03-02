import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ConditionCheck,
  Delete,
  ItemCollectionMetrics,
  Put,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransactWriteItem,
  Update,
  TransactWriteItemsCommand as __TransactWriteItemsCommand,
  TransactWriteItemsCommandInput as __TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput as __TransactWriteItemsCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type TransactWriteCommandInput = Omit<__TransactWriteItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactWriteItem, "ConditionCheck" | "Put" | "Delete" | "Update"> & {
        ConditionCheck?: Omit<ConditionCheck, "Key" | "ExpressionAttributeValues"> & {
          Key: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
        Put?: Omit<Put, "Item" | "ExpressionAttributeValues"> & {
          Item: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
        Delete?: Omit<Delete, "Key" | "ExpressionAttributeValues"> & {
          Key: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
        Update?: Omit<Update, "Key" | "ExpressionAttributeValues"> & {
          Key: { [key: string]: NativeAttributeValue } | undefined;
          ExpressionAttributeValues?: { [key: string]: NativeAttributeValue };
        };
      })[]
    | undefined;
};

export type TransactWriteCommandOutput = Omit<__TransactWriteItemsCommandOutput, "ItemCollectionMetrics"> & {
  ItemCollectionMetrics?: {
    [key: string]: (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: { [key: string]: NativeAttributeValue };
    })[];
  };
};

export class TransactWriteCommand extends $Command<
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TransactWriteCommandInput) {
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
  ): Handler<TransactWriteCommandInput, TransactWriteCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [
      {
        key: "TransactItems",
        children: [
          { key: "ConditionCheck", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
          { key: "Put", children: [{ key: "Item" }, { key: "ExpressionAttributeValues" }] },
          { key: "Delete", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
          { key: "Update", children: [{ key: "Key" }, { key: "ExpressionAttributeValues" }] },
        ],
      },
    ];
    const outputKeyNodes = [
      {
        key: "ItemCollectionMetrics",
        children: {
          children: [{ key: "ItemCollectionKey" }],
        },
      },
    ];

    const command = new __TransactWriteItemsCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
