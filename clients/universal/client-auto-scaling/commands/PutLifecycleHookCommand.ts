import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLifecycleHook } from "../model/PutLifecycleHook";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLifecycleHookInput } from "../types/PutLifecycleHookInput";
import { PutLifecycleHookOutput } from "../types/PutLifecycleHookOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/PutLifecycleHookInput";
export * from "../types/PutLifecycleHookOutput";
export * from "../types/PutLifecycleHookExceptionsUnion";

export class PutLifecycleHookCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLifecycleHookInput,
      OutputTypesUnion,
      PutLifecycleHookOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutLifecycleHook;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLifecycleHookInput,
    PutLifecycleHookOutput,
    Uint8Array
  >();

  constructor(readonly input: PutLifecycleHookInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<PutLifecycleHookInput, PutLifecycleHookOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLifecycleHookInput, PutLifecycleHookOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
