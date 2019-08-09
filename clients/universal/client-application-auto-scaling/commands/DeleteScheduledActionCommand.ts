import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScheduledAction } from "../model/DeleteScheduledAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScheduledActionInput } from "../types/DeleteScheduledActionInput";
import { DeleteScheduledActionOutput } from "../types/DeleteScheduledActionOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DeleteScheduledActionInput";
export * from "../types/DeleteScheduledActionOutput";
export * from "../types/DeleteScheduledActionExceptionsUnion";

export class DeleteScheduledActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScheduledActionInput,
      OutputTypesUnion,
      DeleteScheduledActionOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteScheduledAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScheduledActionInput,
    DeleteScheduledActionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScheduledActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteScheduledActionInput,
    DeleteScheduledActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScheduledActionInput, DeleteScheduledActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
