import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSpeechSynthesisTask } from "../model/GetSpeechSynthesisTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSpeechSynthesisTaskInput } from "../types/GetSpeechSynthesisTaskInput";
import { GetSpeechSynthesisTaskOutput } from "../types/GetSpeechSynthesisTaskOutput";
import { PollyResolvedConfiguration } from "../PollyConfiguration";
export * from "../types/GetSpeechSynthesisTaskInput";
export * from "../types/GetSpeechSynthesisTaskOutput";
export * from "../types/GetSpeechSynthesisTaskExceptionsUnion";

export class GetSpeechSynthesisTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSpeechSynthesisTaskInput,
      OutputTypesUnion,
      GetSpeechSynthesisTaskOutput,
      PollyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSpeechSynthesisTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSpeechSynthesisTaskInput,
    GetSpeechSynthesisTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSpeechSynthesisTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PollyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSpeechSynthesisTaskInput,
    GetSpeechSynthesisTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSpeechSynthesisTaskInput, GetSpeechSynthesisTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
