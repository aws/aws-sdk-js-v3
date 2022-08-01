// smithy-typescript generated code
import {
  BatchGetItemCommand as __BatchGetItemCommand,
  BatchGetItemCommandInput as __BatchGetItemCommandInput,
  BatchGetItemCommandOutput as __BatchGetItemCommandOutput,
  KeysAndAttributes,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type BatchGetCommandInput = Omit<__BatchGetItemCommandInput, "RequestItems"> & {
  RequestItems:
    | Record<
        string,
        Omit<KeysAndAttributes, "Keys"> & {
          Keys: Record<string, NativeAttributeValue>[] | undefined;
        }
      >
    | undefined;
};

export type BatchGetCommandOutput = Omit<__BatchGetItemCommandOutput, "Responses" | "UnprocessedKeys"> & {
  Responses?: Record<string, Record<string, NativeAttributeValue>[]>;
  UnprocessedKeys?: Record<
    string,
    Omit<KeysAndAttributes, "Keys"> & {
      Keys: Record<string, NativeAttributeValue>[] | undefined;
    }
  >;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchGetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchGetCommand extends DynamoDBDocumentClientCommand<
  BatchGetCommandInput,
  BatchGetCommandOutput,
  __BatchGetItemCommandInput,
  __BatchGetItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [
    {
      key: "RequestItems",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];
  protected readonly outputKeyNodes = [
    { key: "Responses", children: {} },
    {
      key: "UnprocessedKeys",
      children: {
        children: [{ key: "Keys" }],
      },
    },
  ];

  protected readonly clientCommand: __BatchGetItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    BatchGetCommandInput | __BatchGetItemCommandInput,
    BatchGetCommandOutput | __BatchGetItemCommandOutput
  >;

  constructor(readonly input: BatchGetCommandInput) {
    super();
    this.clientCommand = new __BatchGetItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetCommandInput, BatchGetCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
