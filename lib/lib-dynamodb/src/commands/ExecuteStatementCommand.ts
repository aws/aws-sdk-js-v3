// smithy-typescript generated code
import {
  ExecuteStatementCommand as __ExecuteStatementCommand,
  ExecuteStatementCommandInput as __ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput as __ExecuteStatementCommandOutput,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { ALL_MEMBERS, ALL_VALUES } from "../commands/utils";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type ExecuteStatementCommandInput = Omit<__ExecuteStatementCommandInput, "Parameters"> & {
  Parameters?: NativeAttributeValue[];
};

/**
 * @public
 */
export type ExecuteStatementCommandOutput = Omit<__ExecuteStatementCommandOutput, "Items" | "LastEvaluatedKey"> & {
  Items?: Record<string, NativeAttributeValue>[];
  LastEvaluatedKey?: Record<string, NativeAttributeValue>;
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * ExecuteStatementCommand operation from {@link @aws-sdk/client-dynamodb#ExecuteStatementCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class ExecuteStatementCommand extends DynamoDBDocumentClientCommand<
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
  __ExecuteStatementCommandInput,
  __ExecuteStatementCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = {
    Parameters: ALL_MEMBERS, // set/list of AttributeValue
  };
  protected readonly outputKeyNodes = {
    Items: {
      "*": ALL_VALUES, // map with AttributeValue
    },
    LastEvaluatedKey: ALL_VALUES, // map with AttributeValue
  };

  protected readonly clientCommand: __ExecuteStatementCommand;
  public readonly middlewareStack: MiddlewareStack<
    ExecuteStatementCommandInput | __ExecuteStatementCommandInput,
    ExecuteStatementCommandOutput | __ExecuteStatementCommandOutput
  >;

  constructor(readonly input: ExecuteStatementCommandInput) {
    super();
    this.clientCommand = new __ExecuteStatementCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteStatementCommandInput, ExecuteStatementCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
