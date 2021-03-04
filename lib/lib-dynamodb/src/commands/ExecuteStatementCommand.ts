import { DynamoDBDocumentClientResolvedConfig } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  ExecuteStatementCommand as __ExecuteStatementCommand,
  ExecuteStatementCommandInput as __ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput as __ExecuteStatementCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type ExecuteStatementCommandInput = Omit<__ExecuteStatementCommandInput, "Parameters"> & {
  Parameters?: NativeAttributeValue[];
};

export type ExecuteStatementCommandOutput = Omit<__ExecuteStatementCommandOutput, "Items"> & {
  Items?: {
    [key: string]: NativeAttributeValue;
  }[];
};

export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExecuteStatementCommandInput) {
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
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    const { marshallOptions, unmarshallOptions } = configuration.translateConfig || {};
    const inputKeyNodes = [{ key: "Parameters" }];
    const outputKeyNodes = [{ key: "Items" }];

    const command = new __ExecuteStatementCommand(marshallInput(this.input, inputKeyNodes, marshallOptions));
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
