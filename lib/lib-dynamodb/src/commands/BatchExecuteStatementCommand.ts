// smithy-typescript generated code
import {
  BatchExecuteStatementCommand as __BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput as __BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput as __BatchExecuteStatementCommandOutput,
  BatchStatementRequest,
  BatchStatementResponse,
} from "@aws-sdk/client-dynamodb";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MiddlewareStack } from "@aws-sdk/types";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

import { DynamoDBDocumentClientCommand } from "../baseCommand/DynamoDBDocumentClientCommand";
import { DynamoDBDocumentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBDocumentClient";

export type BatchExecuteStatementCommandInput = Omit<__BatchExecuteStatementCommandInput, "Statements"> & {
  Statements:
    | (Omit<BatchStatementRequest, "Parameters"> & {
        Parameters?: NativeAttributeValue[];
      })[]
    | undefined;
};

export type BatchExecuteStatementCommandOutput = Omit<__BatchExecuteStatementCommandOutput, "Responses"> & {
  Responses?: (Omit<BatchStatementResponse, "Item"> & {
    Item?: Record<string, NativeAttributeValue>;
  })[];
};

/**
 * Accepts native JavaScript types instead of `AttributeValue`s, and calls
 * BatchExecuteStatementCommand operation from {@link https://www.npmjs.com/package/@aws-sdk/client-dynamodb @aws-sdk/client-dynamodb}.
 *
 * JavaScript objects passed in as parameters are marshalled into `AttributeValue` shapes
 * required by Amazon DynamoDB. Responses from DynamoDB are unmarshalled into plain JavaScript objects.
 */
export class BatchExecuteStatementCommand extends DynamoDBDocumentClientCommand<
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
  DynamoDBDocumentClientResolvedConfig
> {
  protected readonly inputKeyNodes = [{ key: "Statements", children: [{ key: "Parameters" }] }];
  protected readonly outputKeyNodes = [{ key: "Responses", children: [{ key: "Item" }] }];

  constructor(readonly input: BatchExecuteStatementCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DynamoDBDocumentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput> {
    const command = new __BatchExecuteStatementCommand(this.input);
    this.addMarshallingMiddleware(command, __BatchExecuteStatementCommand.name, configuration);
    const stack = clientStack.concat(this.middlewareStack as typeof clientStack);
    const handler = command.resolveMiddleware(stack, configuration, options);

    return async () => handler(command);
  }
}
