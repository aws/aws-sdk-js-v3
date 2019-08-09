import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { VerifyUserAttribute } from "../model/VerifyUserAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyUserAttributeInput } from "../types/VerifyUserAttributeInput";
import { VerifyUserAttributeOutput } from "../types/VerifyUserAttributeOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/VerifyUserAttributeInput";
export * from "../types/VerifyUserAttributeOutput";
export * from "../types/VerifyUserAttributeExceptionsUnion";

export class VerifyUserAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyUserAttributeInput,
      OutputTypesUnion,
      VerifyUserAttributeOutput,
      CognitoIdentityProviderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = VerifyUserAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyUserAttributeInput,
    VerifyUserAttributeOutput,
    _stream.Readable
  >();

  constructor(readonly input: VerifyUserAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    VerifyUserAttributeInput,
    VerifyUserAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyUserAttributeInput, VerifyUserAttributeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
