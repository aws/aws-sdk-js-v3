import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifyEmailIdentity } from "../model/VerifyEmailIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyEmailIdentityInput } from "../types/VerifyEmailIdentityInput";
import { VerifyEmailIdentityOutput } from "../types/VerifyEmailIdentityOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/VerifyEmailIdentityInput";
export * from "../types/VerifyEmailIdentityOutput";
export * from "../types/VerifyEmailIdentityExceptionsUnion";

export class VerifyEmailIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyEmailIdentityInput,
      OutputTypesUnion,
      VerifyEmailIdentityOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = VerifyEmailIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyEmailIdentityInput,
    VerifyEmailIdentityOutput,
    Blob
  >();

  constructor(readonly input: VerifyEmailIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    VerifyEmailIdentityInput,
    VerifyEmailIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyEmailIdentityInput, VerifyEmailIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
