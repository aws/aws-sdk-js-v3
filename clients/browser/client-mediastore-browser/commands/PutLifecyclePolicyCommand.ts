import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLifecyclePolicy } from "../model/operations/PutLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLifecyclePolicyInput } from "../types/PutLifecyclePolicyInput";
import { PutLifecyclePolicyOutput } from "../types/PutLifecyclePolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/PutLifecyclePolicyInput";
export * from "../types/PutLifecyclePolicyOutput";
export * from "../types/PutLifecyclePolicyExceptionsUnion";

export class PutLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLifecyclePolicyInput,
      OutputTypesUnion,
      PutLifecyclePolicyOutput,
      MediaStoreResolvedConfiguration,
      Blob
    > {
  readonly model = PutLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLifecyclePolicyInput,
    PutLifecyclePolicyOutput,
    Blob
  >();

  constructor(readonly input: PutLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutLifecyclePolicyInput,
    PutLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLifecyclePolicyInput, PutLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
