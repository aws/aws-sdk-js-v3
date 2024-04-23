// smithy-typescript generated code
import {
  GetItemCommand as __GetItemCommand,
  GetItemCommandInput as __GetItemCommandInput,
  GetItemCommandOutput as __GetItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_VALUES } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type GetCommandInput = Omit<__GetItemCommandInput, "Key"> & {
  Key: Record<string, NativeAttributeValue> | undefined;
};

/**
 * @public
 */
export type GetCommandOutput = Omit<__GetItemCommandOutput, "Item"> & {
  Item?: Record<string, NativeAttributeValue>;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * GetItemCommand operation from {@link @aws-sdk/client-dynamodb#GetItemCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class GetCommand extends DynamoDBDocumentClientCommand<
  GetCommandInput,
  GetCommandOutput,
  __GetItemCommandInput,
  __GetItemCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    Key: ALL_VALUES, // map with AttributeValue
  };
  protected readonly outputKeyNodes = {
    Item: ALL_VALUES, // map with AttributeValue
  };

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
