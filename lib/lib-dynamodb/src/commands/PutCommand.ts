// smithy-typescript generated code
import {
  ExpectedAttributeValue,
  ItemCollectionMetrics,
  PutItemCommand as __PutItemCommand,
  PutItemCommandInput as __PutItemCommandInput,
  PutItemCommandOutput as __PutItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type PutCommandInput = Omit<__PutItemCommandInput, "Item" | "Expected" | "ExpressionAttributeValues"> & {
  Item: Record<string, NativeAttributeValue> | undefined;
  Expected?: Record<
    string,
    Omit<ExpectedAttributeValue, "Value" | "AttributeValueList"> & {
      Value?: NativeAttributeValue;
      AttributeValueList?: NativeAttributeValue[];
    }
  >;
  ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
};

export type PutCommandOutput = Omit<__PutItemCommandOutput, "Attributes" | "ItemCollectionMetrics"> & {
  Attributes?: Record<string, NativeAttributeValue>;
  ItemCollectionMetrics?: Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
    ItemCollectionKey?: Record<string, NativeAttributeValue>;
  };
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * PutItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class PutCommand extends DynamoDBDocumentClientCommand<
  PutCommandInput,
  PutCommandOutput,
  __PutItemCommandInput,
  __PutItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    { key: "Item" },
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

  protected readonly clientCommand: __PutItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    PutCommandInput | __PutItemCommandInput,
    PutCommandOutput | __PutItemCommandOutput
  >;

  constructor(readonly input: PutCommandInput) {
    super();
    this.clientCommand = new __PutItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCommandInput, PutCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
