// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import type { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_MEMBERS, ALL_VALUES } from "../commands/utils";
import type {
  DynamoDBDocumentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DynamoDBDocumentClient";
import { SearchVectorsCommand as __SearchVectorsCommand } from "@aws-sdk/client-dynamodb";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type SearchVectorsCommandInput = Omit<__SearchVectorsCommandInput, "ExpressionAttributeValues" | "SearchVector"> & {
  ExpressionAttributeValues?: Record<string, NativeAttributeValue> | undefined;
  SearchVector: NativeAttributeValue[] | undefined;
};

/**
 * @public
 */
export type SearchVectorsCommandOutput = Omit<__SearchVectorsCommandOutput, "SearchResults"> & {
  SearchResults?: (
    Omit<SearchResultItem, "Item"> & {
      Item?: Record<string, NativeAttributeValue> | undefined;
    }
  )[] | undefined;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * SearchVectorsCommand operation from {@link @aws-sdk/client-dynamodb#SearchVectorsCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class SearchVectorsCommand extends DynamoDBDocumentClientCommand<
  SearchVectorsCommandInput,
  SearchVectorsCommandOutput,
  __SearchVectorsCommandInput,
  __SearchVectorsCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    ExpressionAttributeValues: ALL_VALUES, // map with AttributeValue
    SearchVector: ALL_MEMBERS, // set/list of AttributeValue
  };
  protected readonly outputKeyNodes = {
    SearchResults: {
      "*": {
        Item: ALL_VALUES, // map with AttributeValue
      },
    },
  };

  protected readonly clientCommand: __SearchVectorsCommand;
  public readonly middlewareStack: MiddlewareStack<SearchVectorsCommandInput | __SearchVectorsCommandInput,
  SearchVectorsCommandOutput | __SearchVectorsCommandOutput>;

  constructor(readonly input: SearchVectorsCommandInput) {
    super();
    this.clientCommand = new __SearchVectorsCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchVectorsCommandInput, SearchVectorsCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}

import type {
  SearchResultItem,
  SearchVectorsCommandInput as __SearchVectorsCommandInput,
  SearchVectorsCommandOutput as __SearchVectorsCommandOutput,
} from "@aws-sdk/client-dynamodb";
import type {
  NativeAttributeValue,
} from "@aws-sdk/util-dynamodb";
