import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TerminateJob } from "../model/TerminateJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TerminateJobInput } from "../types/TerminateJobInput";
import { TerminateJobOutput } from "../types/TerminateJobOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/TerminateJobInput";
export * from "../types/TerminateJobOutput";
export * from "../types/TerminateJobExceptionsUnion";

export class TerminateJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TerminateJobInput,
      OutputTypesUnion,
      TerminateJobOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TerminateJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TerminateJobInput,
    TerminateJobOutput,
    _stream.Readable
  >();

  constructor(readonly input: TerminateJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<TerminateJobInput, TerminateJobOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TerminateJobInput, TerminateJobOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
