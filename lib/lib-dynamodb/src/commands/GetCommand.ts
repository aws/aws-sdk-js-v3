// smithy-typescript generated code
import {
  GetItemCommand as __GetItemCommand,
  GetItemCommandInput as __GetItemCommandInput,
  GetItemCommandOutput as __GetItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type GetCommandInput = Omit<__GetItemCommandInput, "Key"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
};

export type GetCommandOutput = Omit<__GetItemCommandOutput, "Item"> & {
  Item?: Record<string, NativeAttributeValue>;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * GetItemCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class GetCommand extends DynamoDBDocumentClientCommand<
  GetCommandInput,
  GetCommandOutput,
  __GetItemCommandInput,
  __GetItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [{ key: "Key" }];
  protected readonly outputKeyNodes = [{ key: "Item" }];

  protected readonly clientCommand: __GetItemCommand;
  public readonly middlewareStack: MiddlewareStack<
    GetCommandInput | __GetItemCommandInput,
    GetCommandOutput | __GetItemCommandOutput
  >;

  constructor(readonly input: GetCommandInput) {
    super();
    this.clientCommand = new __GetItemCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommandInput, GetCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
