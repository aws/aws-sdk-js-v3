import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartTask } from "../model/StartTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartTaskInput } from "../types/StartTaskInput";
import { StartTaskOutput } from "../types/StartTaskOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/StartTaskInput";
export * from "../types/StartTaskOutput";
export * from "../types/StartTaskExceptionsUnion";

export class StartTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartTaskInput,
      OutputTypesUnion,
      StartTaskOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartTaskInput,
    StartTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<StartTaskInput, StartTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartTaskInput, StartTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
