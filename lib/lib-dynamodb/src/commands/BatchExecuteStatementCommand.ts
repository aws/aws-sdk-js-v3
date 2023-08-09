// smithy-typescript generated code
import {
  BatchExecuteStatementCommand as __BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput as __BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput as __BatchExecuteStatementCommandOutput,
  BatchStatementError,
  BatchStatementRequest,
  BatchStatementResponse,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@smithy/types";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

/**
 * @public
 */
export { DynamoDBDocumentClientCommand, $Command };

/**
 * @public
 */
export type BatchExecuteStatementCommandInput = Omit<__BatchExecuteStatementCommandInput, "Statements"> & {
  Statements:
    | (Omit<BatchStatementRequest, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
      })[]
    | undefined;
};

/**
 * @public
 */
export type BatchExecuteStatementCommandOutput = Omit<__BatchExecuteStatementCommandOutput, "Responses"> & {
  Responses?: (Omit<BatchStatementResponse, "Error" | "Item"> & {
    Error?: Omit<BatchStatementError, "Item"> & {
      Item?: Record<string, NativeAttributeValue>;
    };
    Item?: Record<string, NativeAttributeValue>;
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchExecuteStatementCommand operation from {@link @aws-sdk/client-dynamodb#BatchExecuteStatementCommand}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 *
 * @public
 */
export class BatchExecuteStatementCommand extends DynamoDBDocumentClientCommand<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  __BatchExecuteStatementCommandInput,
  __BatchExecuteStatementCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [{ key: "Statements", children: [{ key: "Parameters" }] }];
  protected readonly outputKeyNodes = [
    { key: "Responses", children: [{ key: "Error", children: [{ key: "Item" }] }, { key: "Item" }] },
  ];

  protected readonly clientCommand: __BatchExecuteStatementCommand;
  public readonly middlewareStack: MiddlewareStack<
    BatchExecuteStatementCommandInput | __BatchExecuteStatementCommandInput,
    BatchExecuteStatementCommandOutput | __BatchExecuteStatementCommandOutput
  >;

  constructor(readonly input: BatchExecuteStatementCommandInput) {
    super();
    this.clientCommand = new __BatchExecuteStatementCommand(this.input as any);
    this.middlewareStack = this.clientCommand.middlewareStack;
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput> {
    this.addMarshallingMiddleware(configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = this.clientCommand.resolveMiddleware(stack, configuration, options);

    return async () => handler(this.clientCommand);
  }
}
