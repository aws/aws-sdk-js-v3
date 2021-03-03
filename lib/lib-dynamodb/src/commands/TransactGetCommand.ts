import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  Get,
  ItemResponse,
  ServiceInputTypes,
  ServiceOutputTypes,
  TransactGetItem,
  TransactGetItemsCommand as __TransactGetItemsCommand,
  TransactGetItemsCommandInput as __TransactGetItemsCommandInput,
  TransactGetItemsCommandOutput as __TransactGetItemsCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type TransactGetCommandInput = Omit<__TransactGetItemsCommandInput, "TransactItems"> & {
  TransactItems:
    | (Omit<TransactGetItem, "Get"> & {
        Get:
          | (Omit<Get, "Key"> & {
              Key: { [key: string]: NativeAttributeValue } | undefined;
            })
          | undefined;
      })[]
    | undefined;
};

export type TransactGetCommandOutput = Omit<__TransactGetItemsCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: { [key: string]: NativeAttributeValue };
  })[];
};

export class TransactGetCommand extends $Command<
  TransactGetCommandInput,
  TransactGetCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
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
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [{ key: "TransactItems", children: [{ key: "Get", children: [{ key: "Key" }] }] }];
    const outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

    const command = new __TransactGetItemsCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
