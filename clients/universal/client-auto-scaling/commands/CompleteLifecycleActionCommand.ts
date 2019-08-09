import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CompleteLifecycleAction } from "../model/CompleteLifecycleAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompleteLifecycleActionInput } from "../types/CompleteLifecycleActionInput";
import { CompleteLifecycleActionOutput } from "../types/CompleteLifecycleActionOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/CompleteLifecycleActionInput";
export * from "../types/CompleteLifecycleActionOutput";
export * from "../types/CompleteLifecycleActionExceptionsUnion";

export class CompleteLifecycleActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompleteLifecycleActionInput,
      OutputTypesUnion,
      CompleteLifecycleActionOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CompleteLifecycleAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompleteLifecycleActionInput,
    CompleteLifecycleActionOutput,
    Uint8Array
  >();

  constructor(readonly input: CompleteLifecycleActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CompleteLifecycleActionInput,
    CompleteLifecycleActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CompleteLifecycleActionInput, CompleteLifecycleActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
