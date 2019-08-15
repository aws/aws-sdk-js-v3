import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLifecyclePolicy } from "../model/operations/DeleteLifecyclePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLifecyclePolicyInput } from "../types/DeleteLifecyclePolicyInput";
import { DeleteLifecyclePolicyOutput } from "../types/DeleteLifecyclePolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/DeleteLifecyclePolicyInput";
export * from "../types/DeleteLifecyclePolicyOutput";
export * from "../types/DeleteLifecyclePolicyExceptionsUnion";

export class DeleteLifecyclePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLifecyclePolicyInput,
      OutputTypesUnion,
      DeleteLifecyclePolicyOutput,
      MediaStoreResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLifecyclePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLifecyclePolicyInput,
    DeleteLifecyclePolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteLifecyclePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLifecyclePolicyInput,
    DeleteLifecyclePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
