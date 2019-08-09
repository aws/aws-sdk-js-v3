import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCorsPolicy } from "../model/DeleteCorsPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCorsPolicyInput } from "../types/DeleteCorsPolicyInput";
import { DeleteCorsPolicyOutput } from "../types/DeleteCorsPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/DeleteCorsPolicyInput";
export * from "../types/DeleteCorsPolicyOutput";
export * from "../types/DeleteCorsPolicyExceptionsUnion";

export class DeleteCorsPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCorsPolicyInput,
      OutputTypesUnion,
      DeleteCorsPolicyOutput,
      MediaStoreResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteCorsPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCorsPolicyInput,
    DeleteCorsPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteCorsPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteCorsPolicyInput, DeleteCorsPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCorsPolicyInput, DeleteCorsPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
