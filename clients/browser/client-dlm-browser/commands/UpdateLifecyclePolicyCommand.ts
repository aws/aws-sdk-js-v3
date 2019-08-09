import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLifecyclePolicy } from "../model/UpdateLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLifecyclePolicyInput } from "../types/UpdateLifecyclePolicyInput";
import { UpdateLifecyclePolicyOutput } from "../types/UpdateLifecyclePolicyOutput";
import { DLMResolvedConfiguration } from "../DLMConfiguration";
export * from "../types/UpdateLifecyclePolicyInput";
export * from "../types/UpdateLifecyclePolicyOutput";
export * from "../types/UpdateLifecyclePolicyExceptionsUnion";

export class UpdateLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLifecyclePolicyInput,
      OutputTypesUnion,
      UpdateLifecyclePolicyOutput,
      DLMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLifecyclePolicyInput,
    UpdateLifecyclePolicyOutput,
    Blob
  >();

  constructor(readonly input: UpdateLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DLMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLifecyclePolicyInput,
    UpdateLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLifecyclePolicyInput, UpdateLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
