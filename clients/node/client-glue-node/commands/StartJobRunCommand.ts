import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartJobRun } from "../model/operations/StartJobRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartJobRunInput } from "../types/StartJobRunInput";
import { StartJobRunOutput } from "../types/StartJobRunOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StartJobRunInput";
export * from "../types/StartJobRunOutput";
export * from "../types/StartJobRunExceptionsUnion";

export class StartJobRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartJobRunInput,
      OutputTypesUnion,
      StartJobRunOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartJobRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartJobRunInput,
    StartJobRunOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartJobRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<StartJobRunInput, StartJobRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartJobRunInput, StartJobRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
