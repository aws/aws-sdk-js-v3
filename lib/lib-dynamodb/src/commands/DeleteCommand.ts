// smithy-typescript generated code
import {
  DeleteItemCommand as __DeleteItemCommand,
  DeleteItemCommandInput as __DeleteItemCommandInput,
  DeleteItemCommandOutput as __DeleteItemCommandOutput,
  ExpectedAttributeValue,
  ItemCollectionMetrics,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

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

export type DeleteCommandOutput = Omit<__DeleteItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: Record<string, NativeAttributeValue>;
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: Record<string, NativeAttributeValue>;
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * DeleteItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class DeleteCommand extends DynamoDBDocumentClientCommand<
  DeleteCommandInput,
  DeleteCommandOutput,
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

  constructor(readonly input: DeleteCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCommandInput, DeleteCommandOutput> {
    const command = new __DeleteItemCommand(this.input);
    this.addMarshallingMiddleware(command, __DeleteItemCommand.name, configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = command.resolveMiddleware(stack, configuration, options);

    return async () => handler(command);
  }
}
