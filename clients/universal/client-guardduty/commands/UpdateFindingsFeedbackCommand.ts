import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFindingsFeedback } from "../model/UpdateFindingsFeedback";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFindingsFeedbackInput } from "../types/UpdateFindingsFeedbackInput";
import { UpdateFindingsFeedbackOutput } from "../types/UpdateFindingsFeedbackOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/UpdateFindingsFeedbackInput";
export * from "../types/UpdateFindingsFeedbackOutput";
export * from "../types/UpdateFindingsFeedbackExceptionsUnion";

export class UpdateFindingsFeedbackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFindingsFeedbackInput,
      OutputTypesUnion,
      UpdateFindingsFeedbackOutput,
      GuardDutyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateFindingsFeedback;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFindingsFeedbackInput,
    UpdateFindingsFeedbackOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateFindingsFeedbackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFindingsFeedbackInput,
    UpdateFindingsFeedbackOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFindingsFeedbackInput, UpdateFindingsFeedbackOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
