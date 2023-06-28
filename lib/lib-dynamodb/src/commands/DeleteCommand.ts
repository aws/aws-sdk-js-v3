// smithy-typescript generated code
import {
  DeleteItemCommand as __DeleteItemCommand,
  DeleteItemCommandInput as __DeleteItemCommandInput,
  DeleteItemCommandOutput as __DeleteItemCommandOutput,
  ExpectedAttributeValue,
  ItemCollectionMetrics,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type DeleteCommandInput = Omit<__DeleteItemCommandInput, "Key" | "Expected" | "ExpressionAttributeValues"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
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
export type DeleteCommandOutput = Omit<__DeleteItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: Record<string, NativeAttributeValue>;
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: Record<string, NativeAttributeValue>;
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * DeleteItemCommand operation from {@link @aws-sdk/client-dynamodb#DeleteItemCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class DeleteCommand extends DynamoDBDocumentClientCommand<
  DeleteCommandInput,
  DeleteCommandOutput,
  __DeleteItemCommandInput,
  __DeleteItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    { key: "Key" },
    {
      key: "Expected",
      children: {
        children: [{ key: "Value" }, { key: "AttributeValueList" }],
      },
    },
    { key: "ExpressionAttributeValues" },
  ];
  protected readonly outputKeyNodes = [
    { key: "Attributes" },
    { key: "ItemCollectionMetrics", children: [{ key: "ItemCollectionKey" }] },
  ];

  protected readonly clientCommand: __DeleteItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    DeleteCommandInput | __DeleteItemCommandInput,
    DeleteCommandOutput | __DeleteItemCommandOutput
  >;

  constructor(readonly input: DeleteCommandInput) {
    super();
    this.clientCommand = new __DeleteItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
