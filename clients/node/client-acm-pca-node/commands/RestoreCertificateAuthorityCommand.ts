import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreCertificateAuthority } from "../model/RestoreCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreCertificateAuthorityInput } from "../types/RestoreCertificateAuthorityInput";
import { RestoreCertificateAuthorityOutput } from "../types/RestoreCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/RestoreCertificateAuthorityInput";
export * from "../types/RestoreCertificateAuthorityOutput";
export * from "../types/RestoreCertificateAuthorityExceptionsUnion";

export class RestoreCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreCertificateAuthorityInput,
      OutputTypesUnion,
      RestoreCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreCertificateAuthorityInput,
    RestoreCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreCertificateAuthorityInput,
    RestoreCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreCertificateAuthorityInput,
        RestoreCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
