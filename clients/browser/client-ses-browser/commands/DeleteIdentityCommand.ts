import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIdentity } from "../model/DeleteIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIdentityInput } from "../types/DeleteIdentityInput";
import { DeleteIdentityOutput } from "../types/DeleteIdentityOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteIdentityInput";
export * from "../types/DeleteIdentityOutput";
export * from "../types/DeleteIdentityExceptionsUnion";

export class DeleteIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIdentityInput,
      OutputTypesUnion,
      DeleteIdentityOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIdentityInput,
    DeleteIdentityOutput,
    Blob
  >();

  constructor(readonly input: DeleteIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIdentityInput, DeleteIdentityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIdentityInput, DeleteIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
