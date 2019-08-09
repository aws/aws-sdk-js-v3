import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateCertificateAuthority } from "../model/UpdateCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateCertificateAuthorityInput } from "../types/UpdateCertificateAuthorityInput";
import { UpdateCertificateAuthorityOutput } from "../types/UpdateCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/UpdateCertificateAuthorityInput";
export * from "../types/UpdateCertificateAuthorityOutput";
export * from "../types/UpdateCertificateAuthorityExceptionsUnion";

export class UpdateCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateCertificateAuthorityInput,
      OutputTypesUnion,
      UpdateCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateCertificateAuthorityInput,
    UpdateCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateCertificateAuthorityInput,
    UpdateCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateCertificateAuthorityInput,
        UpdateCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
