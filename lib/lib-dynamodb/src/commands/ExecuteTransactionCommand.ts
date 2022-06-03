// smithy-typescript generated code
import {
  ExecuteTransactionCommand as __ExecuteTransactionCommand,
  ExecuteTransactionCommandInput as __ExecuteTransactionCommandInput,
  ExecuteTransactionCommandOutput as __ExecuteTransactionCommandOutput,
  ItemResponse,
  ParameterizedStatement,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { marshallInput, unmarshallOutput } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type ExecuteTransactionCommandInput = Omit<__ExecuteTransactionCommandInput, "TransactStatements"> & {
  TransactStatements:
    | (Omit<ParameterizedStatement, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
      })[]
    | undefined;
};

export type ExecuteTransactionCommandOutput = Omit<__ExecuteTransactionCommandOutput, "Responses"> & {
  Responses?: (Omit<ItemResponse, "Item"> & {
    Item?: Record<string, NativeAttributeValue>;
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteTransactionCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
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
