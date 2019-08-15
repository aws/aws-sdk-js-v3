import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifyUserAttribute } from "../model/operations/VerifyUserAttribute";
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
      Blob
    > {
  readonly model = VerifyUserAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyUserAttributeInput,
    VerifyUserAttributeOutput,
    Blob
  >();

  constructor(readonly input: VerifyUserAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
