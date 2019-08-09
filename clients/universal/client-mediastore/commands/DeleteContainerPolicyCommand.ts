import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteContainerPolicy } from "../model/DeleteContainerPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteContainerPolicyInput } from "../types/DeleteContainerPolicyInput";
import { DeleteContainerPolicyOutput } from "../types/DeleteContainerPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/DeleteContainerPolicyInput";
export * from "../types/DeleteContainerPolicyOutput";
export * from "../types/DeleteContainerPolicyExceptionsUnion";

export class DeleteContainerPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteContainerPolicyInput,
      OutputTypesUnion,
      DeleteContainerPolicyOutput,
      MediaStoreResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteContainerPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteContainerPolicyInput,
    DeleteContainerPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteContainerPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteContainerPolicyInput,
    DeleteContainerPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteContainerPolicyInput, DeleteContainerPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
