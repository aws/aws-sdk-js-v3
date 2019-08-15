import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SignUp } from "../model/operations/SignUp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SignUpInput } from "../types/SignUpInput";
import { SignUpOutput } from "../types/SignUpOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/SignUpInput";
export * from "../types/SignUpOutput";
export * from "../types/SignUpExceptionsUnion";

export class SignUpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SignUpInput,
      OutputTypesUnion,
      SignUpOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SignUp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SignUpInput,
    SignUpOutput,
    _stream.Readable
  >();

  constructor(readonly input: SignUpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<SignUpInput, SignUpOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SignUpInput, SignUpOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
