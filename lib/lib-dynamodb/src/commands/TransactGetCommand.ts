// smithy-typescript generated code
import {
  Get,
  ItemResponse,
  TransactGetItem,
  TransactGetItemsCommand as __TransactGetItemsCommand,
  TransactGetItemsCommandInput as __TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput as __TransactGetItemsCommandOutput,
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
export type TransactGetCommandInput = Omit<__TransactGetItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactGetItem, "Get"> & {
        Get:
          | (Omit<Get, "Key"> & {
              Key: Record<string, NativeAttributeValue> | undefined;
            })
          | undefined;
      })[]
    | undefined;
};

/**
 * @public
 */
export type TransactGetCommandOutput = Omit<__TransactGetItemsCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: Record<string, NativeAttributeValue>;
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactGetItemsCommand operation from {@link @aws-sdk/client-dynamodb#TransactGetItemsCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class TransactGetCommand extends DynamoDBDocumentClientCommand<
  TransactGetCommandInput,
  TransactGetCommandOutput,
  __TransactGetItemsCommandInput,
  __TransactGetItemsCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    TransactItems: {
      "*": {
        Get: {
          Key: ALL_VALUES, // map with AttributeValue
        },
      },
    },
  };
  protected readonly outputKeyNodes = {
    Responses: {
      "*": {
        Item: ALL_VALUES, // map with AttributeValue
      },
    },
  };

  protected readonly clientCommand: __TransactGetItemsCommand;
  public readonly middlewareStack: MiddlewareStack<
    TransactGetCommandInput | __TransactGetItemsCommandInput,
    TransactGetCommandOutput | __TransactGetItemsCommandOutput
  >;

  constructor(readonly input: TransactGetCommandInput) {
    super();
    this.clientCommand = new __TransactGetItemsCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactGetCommandInput, TransactGetCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
