import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ConditionCheck,
  Delete,
  ItemCollectionMetrics,
  Put,
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

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactWriteItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class TransactWriteCommand extends $Command<
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [
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
  private readonly outputKeyNodes = [
    {
      key: "ItemCollectionMetrics",
      children: {
        children: [{ key: "ItemCollectionKey" }],
      },
    },
  ];

  constructor(readonly input: TransactWriteCommandInput) {
    super();
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
    const command = new __TransactWriteItemsCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
