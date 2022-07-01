// smithy-typescript generated code
import {
  Get,
  ItemResponse,
  TransactGetItem,
  TransactGetItemsCommand as __TransactGetItemsCommand,
  TransactGetItemsCommandInput as __TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput as __TransactGetItemsCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

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

export type TransactGetCommandOutput = Omit<__TransactGetItemsCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: Record<string, NativeAttributeValue>;
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * TransactGetItemsCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class TransactGetCommand extends DynamoDBDocumentClientCommand<
  TransactGetCommandInput,
  TransactGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [{ key: "TransactItems", children: [{ key: "Get", children: [{ key: "Key" }] }] }];
  protected readonly outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

  constructor(readonly input: TransactGetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TransactGetCommandInput, TransactGetCommandOutput> {
    const command = new __TransactGetItemsCommand(this.input);
    this.addMarshallingMiddleware(command, __TransactGetItemsCommand.name, configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = command.resolveMiddleware(stack, configuration, options);

    return async () => handler(command);
  }
}
