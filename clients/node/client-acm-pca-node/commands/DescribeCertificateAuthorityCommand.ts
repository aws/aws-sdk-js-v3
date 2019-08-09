import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCertificateAuthority } from "../model/DescribeCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCertificateAuthorityInput } from "../types/DescribeCertificateAuthorityInput";
import { DescribeCertificateAuthorityOutput } from "../types/DescribeCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/DescribeCertificateAuthorityInput";
export * from "../types/DescribeCertificateAuthorityOutput";
export * from "../types/DescribeCertificateAuthorityExceptionsUnion";

export class DescribeCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCertificateAuthorityInput,
      OutputTypesUnion,
      DescribeCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCertificateAuthorityInput,
    DescribeCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCertificateAuthorityInput,
    DescribeCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeCertificateAuthorityInput,
        DescribeCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
