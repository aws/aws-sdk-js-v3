import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RespondDecisionTaskCompleted } from "../model/RespondDecisionTaskCompleted";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RespondDecisionTaskCompletedInput } from "../types/RespondDecisionTaskCompletedInput";
import { RespondDecisionTaskCompletedOutput } from "../types/RespondDecisionTaskCompletedOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/RespondDecisionTaskCompletedInput";
export * from "../types/RespondDecisionTaskCompletedOutput";
export * from "../types/RespondDecisionTaskCompletedExceptionsUnion";

export class RespondDecisionTaskCompletedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RespondDecisionTaskCompletedInput,
      OutputTypesUnion,
      RespondDecisionTaskCompletedOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RespondDecisionTaskCompleted;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RespondDecisionTaskCompletedInput,
    RespondDecisionTaskCompletedOutput,
    _stream.Readable
  >();

  constructor(readonly input: RespondDecisionTaskCompletedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RespondDecisionTaskCompletedInput,
    RespondDecisionTaskCompletedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RespondDecisionTaskCompletedInput,
        RespondDecisionTaskCompletedOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
