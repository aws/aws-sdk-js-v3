import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetQueryExecution } from "../model/operations/BatchGetQueryExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetQueryExecutionInput } from "../types/BatchGetQueryExecutionInput";
import { BatchGetQueryExecutionOutput } from "../types/BatchGetQueryExecutionOutput";
import { AthenaResolvedConfiguration } from "../AthenaConfiguration";
export * from "../types/BatchGetQueryExecutionInput";
export * from "../types/BatchGetQueryExecutionOutput";
export * from "../types/BatchGetQueryExecutionExceptionsUnion";

export class BatchGetQueryExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetQueryExecutionInput,
      OutputTypesUnion,
      BatchGetQueryExecutionOutput,
      AthenaResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetQueryExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetQueryExecutionInput,
    BatchGetQueryExecutionOutput,
    Blob
  >();

  constructor(readonly input: BatchGetQueryExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AthenaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetQueryExecutionInput,
    BatchGetQueryExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetQueryExecutionInput, BatchGetQueryExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
