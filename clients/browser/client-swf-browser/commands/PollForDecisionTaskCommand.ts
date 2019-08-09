import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PollForDecisionTask } from "../model/PollForDecisionTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PollForDecisionTaskInput } from "../types/PollForDecisionTaskInput";
import { PollForDecisionTaskOutput } from "../types/PollForDecisionTaskOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/PollForDecisionTaskInput";
export * from "../types/PollForDecisionTaskOutput";
export * from "../types/PollForDecisionTaskExceptionsUnion";

export class PollForDecisionTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PollForDecisionTaskInput,
      OutputTypesUnion,
      PollForDecisionTaskOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = PollForDecisionTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PollForDecisionTaskInput,
    PollForDecisionTaskOutput,
    Blob
  >();

  constructor(readonly input: PollForDecisionTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PollForDecisionTaskInput,
    PollForDecisionTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PollForDecisionTaskInput, PollForDecisionTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
