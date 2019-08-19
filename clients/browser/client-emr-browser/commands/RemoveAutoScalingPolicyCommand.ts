import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveAutoScalingPolicy } from "../model/operations/RemoveAutoScalingPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAutoScalingPolicyInput } from "../types/RemoveAutoScalingPolicyInput";
import { RemoveAutoScalingPolicyOutput } from "../types/RemoveAutoScalingPolicyOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/RemoveAutoScalingPolicyInput";
export * from "../types/RemoveAutoScalingPolicyOutput";
export * from "../types/RemoveAutoScalingPolicyExceptionsUnion";

export class RemoveAutoScalingPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAutoScalingPolicyInput,
      OutputTypesUnion,
      RemoveAutoScalingPolicyOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveAutoScalingPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAutoScalingPolicyInput,
    RemoveAutoScalingPolicyOutput,
    Blob
  >();

  constructor(readonly input: RemoveAutoScalingPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveAutoScalingPolicyInput,
    RemoveAutoScalingPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveAutoScalingPolicyInput, RemoveAutoScalingPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
