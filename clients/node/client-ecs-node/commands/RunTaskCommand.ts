import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RunTask } from "../model/operations/RunTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RunTaskInput } from "../types/RunTaskInput";
import { RunTaskOutput } from "../types/RunTaskOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/RunTaskInput";
export * from "../types/RunTaskOutput";
export * from "../types/RunTaskExceptionsUnion";

export class RunTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RunTaskInput,
      OutputTypesUnion,
      RunTaskOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RunTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RunTaskInput,
    RunTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: RunTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<RunTaskInput, RunTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RunTaskInput, RunTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
