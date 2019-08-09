import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VerifyDomainIdentity } from "../model/VerifyDomainIdentity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VerifyDomainIdentityInput } from "../types/VerifyDomainIdentityInput";
import { VerifyDomainIdentityOutput } from "../types/VerifyDomainIdentityOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/VerifyDomainIdentityInput";
export * from "../types/VerifyDomainIdentityOutput";
export * from "../types/VerifyDomainIdentityExceptionsUnion";

export class VerifyDomainIdentityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VerifyDomainIdentityInput,
      OutputTypesUnion,
      VerifyDomainIdentityOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = VerifyDomainIdentity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VerifyDomainIdentityInput,
    VerifyDomainIdentityOutput,
    Uint8Array
  >();

  constructor(readonly input: VerifyDomainIdentityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    VerifyDomainIdentityInput,
    VerifyDomainIdentityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VerifyDomainIdentityInput, VerifyDomainIdentityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
