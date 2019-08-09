import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLifecycleHook } from "../model/DeleteLifecycleHook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLifecycleHookInput } from "../types/DeleteLifecycleHookInput";
import { DeleteLifecycleHookOutput } from "../types/DeleteLifecycleHookOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DeleteLifecycleHookInput";
export * from "../types/DeleteLifecycleHookOutput";
export * from "../types/DeleteLifecycleHookExceptionsUnion";

export class DeleteLifecycleHookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLifecycleHookInput,
      OutputTypesUnion,
      DeleteLifecycleHookOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteLifecycleHook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLifecycleHookInput,
    DeleteLifecycleHookOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteLifecycleHookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLifecycleHookInput,
    DeleteLifecycleHookOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLifecycleHookInput, DeleteLifecycleHookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
