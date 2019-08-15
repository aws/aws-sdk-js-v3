import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCertificateAuthorityCsr } from "../model/operations/GetCertificateAuthorityCsr";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCertificateAuthorityCsrInput } from "../types/GetCertificateAuthorityCsrInput";
import { GetCertificateAuthorityCsrOutput } from "../types/GetCertificateAuthorityCsrOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/GetCertificateAuthorityCsrInput";
export * from "../types/GetCertificateAuthorityCsrOutput";
export * from "../types/GetCertificateAuthorityCsrExceptionsUnion";

export class GetCertificateAuthorityCsrCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCertificateAuthorityCsrInput,
      OutputTypesUnion,
      GetCertificateAuthorityCsrOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCertificateAuthorityCsr;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCertificateAuthorityCsrInput,
    GetCertificateAuthorityCsrOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCertificateAuthorityCsrInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCertificateAuthorityCsrInput,
    GetCertificateAuthorityCsrOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetCertificateAuthorityCsrInput,
        GetCertificateAuthorityCsrOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
