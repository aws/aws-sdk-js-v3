import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScalingPolicy } from "../model/DeleteScalingPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScalingPolicyInput } from "../types/DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "../types/DeleteScalingPolicyOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteScalingPolicyInput";
export * from "../types/DeleteScalingPolicyOutput";
export * from "../types/DeleteScalingPolicyExceptionsUnion";

export class DeleteScalingPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScalingPolicyInput,
      OutputTypesUnion,
      DeleteScalingPolicyOutput,
      GameLiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteScalingPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScalingPolicyInput,
    DeleteScalingPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScalingPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteScalingPolicyInput,
    DeleteScalingPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScalingPolicyInput, DeleteScalingPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
