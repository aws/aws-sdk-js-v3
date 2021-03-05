import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";
import { marshallInput, unmarshallOutput } from "../commands/utils";
import {
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

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteStatementCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class ExecuteStatementCommand extends $Command<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  private readonly inputKeyNodes = [{ key: "Parameters" }];
  private readonly outputKeyNodes = [{ key: "Items" }];

  constructor(readonly input: ExecuteStatementCommandInput) {
    super();
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
    const command = new __ExecuteStatementCommand(marshallInput(this.input, this.inputKeyNodes, marshallOptions));
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
