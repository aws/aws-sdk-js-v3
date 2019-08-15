import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetTraces } from "../model/operations/BatchGetTraces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetTracesInput } from "../types/BatchGetTracesInput";
import { BatchGetTracesOutput } from "../types/BatchGetTracesOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/BatchGetTracesInput";
export * from "../types/BatchGetTracesOutput";
export * from "../types/BatchGetTracesExceptionsUnion";

export class BatchGetTracesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetTracesInput,
      OutputTypesUnion,
      BatchGetTracesOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetTraces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetTracesInput,
    BatchGetTracesOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetTracesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetTracesInput, BatchGetTracesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetTracesInput, BatchGetTracesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
