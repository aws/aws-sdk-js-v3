import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ItemResponse,
  ParameterizedStatement,
  ServiceInputTypes,
  ServiceOutputTypes,
  ExecuteTransactionCommand as __ExecuteTransactionCommand,
  ExecuteTransactionCommandInput as __ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput as __ExecuteTransactionCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type ExecuteTransactionCommandInput = Omit<__ExecuteTransactionCommandInput, "TransactStatements"> & {
  TransactStatements:
    | (Omit<ParameterizedStatement, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
      })[]
    | undefined;
};

export type ExecuteTransactionCommandOutput = Omit<__ExecuteTransactionCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: { [key: string]: NativeAttributeValue };
  })[];
};

export class ExecuteTransactionCommand extends $Command<
  ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteTransactionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [{ key: "TransactStatements", children: [{ key: "Parameters" }] }];
    const outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

    const command = new __ExecuteTransactionCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, outputKeyNodes, unmarshallOptions),
      };
    };
  }
  // Start section: command_body_extra
  // End section: command_body_extra
}
