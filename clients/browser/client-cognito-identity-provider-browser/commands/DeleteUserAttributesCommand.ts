import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUserAttributes } from "../model/operations/DeleteUserAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUserAttributesInput } from "../types/DeleteUserAttributesInput";
import { DeleteUserAttributesOutput } from "../types/DeleteUserAttributesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/DeleteUserAttributesInput";
export * from "../types/DeleteUserAttributesOutput";
export * from "../types/DeleteUserAttributesExceptionsUnion";

export class DeleteUserAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUserAttributesInput,
      OutputTypesUnion,
      DeleteUserAttributesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUserAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUserAttributesInput,
    DeleteUserAttributesOutput,
    Blob
  >();

  constructor(readonly input: DeleteUserAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUserAttributesInput,
    DeleteUserAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteUserAttributesInput, DeleteUserAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
