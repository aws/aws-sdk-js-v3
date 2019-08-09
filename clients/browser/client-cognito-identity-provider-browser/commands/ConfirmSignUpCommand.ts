import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConfirmSignUp } from "../model/ConfirmSignUp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfirmSignUpInput } from "../types/ConfirmSignUpInput";
import { ConfirmSignUpOutput } from "../types/ConfirmSignUpOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/ConfirmSignUpInput";
export * from "../types/ConfirmSignUpOutput";
export * from "../types/ConfirmSignUpExceptionsUnion";

export class ConfirmSignUpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfirmSignUpInput,
      OutputTypesUnion,
      ConfirmSignUpOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = ConfirmSignUp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmSignUpInput,
    ConfirmSignUpOutput,
    Blob
  >();

  constructor(readonly input: ConfirmSignUpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<ConfirmSignUpInput, ConfirmSignUpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfirmSignUpInput, ConfirmSignUpOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
