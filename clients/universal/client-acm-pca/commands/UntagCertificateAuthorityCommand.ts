import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagCertificateAuthority } from "../model/UntagCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagCertificateAuthorityInput } from "../types/UntagCertificateAuthorityInput";
import { UntagCertificateAuthorityOutput } from "../types/UntagCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/UntagCertificateAuthorityInput";
export * from "../types/UntagCertificateAuthorityOutput";
export * from "../types/UntagCertificateAuthorityExceptionsUnion";

export class UntagCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagCertificateAuthorityInput,
      OutputTypesUnion,
      UntagCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UntagCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagCertificateAuthorityInput,
    UntagCertificateAuthorityOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UntagCertificateAuthorityInput,
    UntagCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagCertificateAuthorityInput, UntagCertificateAuthorityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
