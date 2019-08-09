import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchExecuteStatement } from "../model/BatchExecuteStatement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchExecuteStatementInput } from "../types/BatchExecuteStatementInput";
import { BatchExecuteStatementOutput } from "../types/BatchExecuteStatementOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/BatchExecuteStatementInput";
export * from "../types/BatchExecuteStatementOutput";
export * from "../types/BatchExecuteStatementExceptionsUnion";

export class BatchExecuteStatementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchExecuteStatementInput,
      OutputTypesUnion,
      BatchExecuteStatementOutput,
      RDSDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchExecuteStatement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchExecuteStatementInput,
    BatchExecuteStatementOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchExecuteStatementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchExecuteStatementInput,
    BatchExecuteStatementOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchExecuteStatementInput, BatchExecuteStatementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
