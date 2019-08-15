import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ConfirmSignUp } from "../model/operations/ConfirmSignUp";
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
      _stream.Readable
    > {
  readonly model = ConfirmSignUp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfirmSignUpInput,
    ConfirmSignUpOutput,
    _stream.Readable
  >();

  constructor(readonly input: ConfirmSignUpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
