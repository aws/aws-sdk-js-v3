import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserAttributes } from "../model/UpdateUserAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserAttributesInput } from "../types/UpdateUserAttributesInput";
import { UpdateUserAttributesOutput } from "../types/UpdateUserAttributesOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateUserAttributesInput";
export * from "../types/UpdateUserAttributesOutput";
export * from "../types/UpdateUserAttributesExceptionsUnion";

export class UpdateUserAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserAttributesInput,
      OutputTypesUnion,
      UpdateUserAttributesOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserAttributesInput,
    UpdateUserAttributesOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserAttributesInput,
    UpdateUserAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserAttributesInput, UpdateUserAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
