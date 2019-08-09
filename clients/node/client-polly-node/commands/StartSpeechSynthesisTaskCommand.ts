import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartSpeechSynthesisTask } from "../model/StartSpeechSynthesisTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSpeechSynthesisTaskInput } from "../types/StartSpeechSynthesisTaskInput";
import { StartSpeechSynthesisTaskOutput } from "../types/StartSpeechSynthesisTaskOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/StartSpeechSynthesisTaskInput";
export * from "../types/StartSpeechSynthesisTaskOutput";
export * from "../types/StartSpeechSynthesisTaskExceptionsUnion";

export class StartSpeechSynthesisTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSpeechSynthesisTaskInput,
      OutputTypesUnion,
      StartSpeechSynthesisTaskOutput,
      PollyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartSpeechSynthesisTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSpeechSynthesisTaskInput,
    StartSpeechSynthesisTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartSpeechSynthesisTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSpeechSynthesisTaskInput,
    StartSpeechSynthesisTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSpeechSynthesisTaskInput, StartSpeechSynthesisTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
