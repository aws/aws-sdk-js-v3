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
  private readonly inputKeyNodes = [{ key: "TransactStatements", children: [{ key: "Parameters" }] }];
  private readonly outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

  constructor(readonly input: ExecuteTransactionCommandInput) {
    super();
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
    const command = new __ExecuteTransactionCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
    const handler = command.resolveMiddleware(clientStack, configuration, options);

    return async () => {
      const data = await handler(command);
      return {
        ...data,
        output: unmarshallOutput(data.output, this.outputKeyNodes, unmarshallOptions),
      };
    };
  }
}
