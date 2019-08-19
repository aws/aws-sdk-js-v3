import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchStopJobRun } from "../model/operations/BatchStopJobRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchStopJobRunInput } from "../types/BatchStopJobRunInput";
import { BatchStopJobRunOutput } from "../types/BatchStopJobRunOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchStopJobRunInput";
export * from "../types/BatchStopJobRunOutput";
export * from "../types/BatchStopJobRunExceptionsUnion";

export class BatchStopJobRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchStopJobRunInput,
      OutputTypesUnion,
      BatchStopJobRunOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchStopJobRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchStopJobRunInput,
    BatchStopJobRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchStopJobRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchStopJobRunInput, BatchStopJobRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchStopJobRunInput, BatchStopJobRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
