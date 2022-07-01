// smithy-typescript generated code
import {
  ConditionCheck,
  Delete,
  ItemCollectionMetrics,
  Put,
  TransactWriteItem,
  TransactWriteItemsCommand as __TransactWriteItemsCommand,
  TransactWriteItemsCommandInput as __TransactWriteItemsCommandInput,
  TransactWriteItemsCommandOutput as __TransactWriteItemsCommandOutput,
  Update,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type TransactWriteCommandInput = Omit<__TransactWriteItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactWriteItem, "ConditionCheck" | "Put" | "Delete" | "Update"> & {
        ConditionCheck?: Omit<ConditionCheck, "Key" | "ExpressionAttributeValues"> & {
          Key: Record<string, NativeAttributeValue> | undefined;
          ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
        };
        Put?: Omit<Put, "Item" | "ExpressionAttributeValues"> & {
          Item: Record<string, NativeAttributeValue> | undefined;
          ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
        };
        Delete?: Omit<Delete, "Key" | "ExpressionAttributeValues"> & {
          Key: Record<string, NativeAttributeValue> | undefined;
          ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
        };
        Update?: Omit<Update, "Key" | "ExpressionAttributeValues"> & {
          Key: Record<string, NativeAttributeValue> | undefined;
          ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
        };
      })[]
    | undefined;
};

export type TransactWriteCommandOutput = Omit<__TransactWriteItemsCommandOutput, "ItemCollectionMetrics"> & {
  ItemCollectionMetrics?: Record<
    string,
    (Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
      ItemCollectionKey?: Record<string, NativeAttributeValue>;
    })[]
  >;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactWriteItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class TransactWriteCommand extends DynamoDBDocumentClientCommand<
  TransactWriteCommandInput,
  TransactWriteCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
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
  protected readonly outputKeyNodes = [
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
    const command = new __TransactWriteItemsCommand(this.input);
    this.addMarshallingMiddleware(command, __TransactWriteItemsCommand.name, configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = command.resolveMiddleware(stack, configuration, options);

    return async () => handler(command);
  }
}
