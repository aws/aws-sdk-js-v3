import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifyEmailAddress } from "../model/operations/VerifyEmailAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyEmailAddressInput } from "../types/VerifyEmailAddressInput";
import { VerifyEmailAddressOutput } from "../types/VerifyEmailAddressOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/VerifyEmailAddressInput";
export * from "../types/VerifyEmailAddressOutput";
export * from "../types/VerifyEmailAddressExceptionsUnion";

export class VerifyEmailAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyEmailAddressInput,
      OutputTypesUnion,
      VerifyEmailAddressOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = VerifyEmailAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyEmailAddressInput,
    VerifyEmailAddressOutput,
    Blob
  >();

  constructor(readonly input: VerifyEmailAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    VerifyEmailAddressInput,
    VerifyEmailAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyEmailAddressInput, VerifyEmailAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
