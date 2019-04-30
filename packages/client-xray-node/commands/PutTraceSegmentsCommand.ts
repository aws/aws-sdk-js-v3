import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutTraceSegments } from "../model/PutTraceSegments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutTraceSegmentsInput } from "../types/PutTraceSegmentsInput";
import { PutTraceSegmentsOutput } from "../types/PutTraceSegmentsOutput";
import { XRayResolvedConfiguration } from "../XRayConfiguration";
export * from "../types/PutTraceSegmentsInput";
export * from "../types/PutTraceSegmentsOutput";
export * from "../types/PutTraceSegmentsExceptionsUnion";

export class PutTraceSegmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutTraceSegmentsInput,
      OutputTypesUnion,
      PutTraceSegmentsOutput,
      XRayResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutTraceSegmentsInput,
    PutTraceSegmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutTraceSegmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: XRayResolvedConfiguration
  ): __aws_sdk_types.Handler<PutTraceSegmentsInput, PutTraceSegmentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: PutTraceSegments
    };

    return stack.resolve(
      handler<PutTraceSegmentsInput, PutTraceSegmentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
