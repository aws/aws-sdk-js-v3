import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListCertificateAuthorities } from "../model/ListCertificateAuthorities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCertificateAuthoritiesInput } from "../types/ListCertificateAuthoritiesInput";
import { ListCertificateAuthoritiesOutput } from "../types/ListCertificateAuthoritiesOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/ListCertificateAuthoritiesInput";
export * from "../types/ListCertificateAuthoritiesOutput";
export * from "../types/ListCertificateAuthoritiesExceptionsUnion";

export class ListCertificateAuthoritiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCertificateAuthoritiesInput,
      OutputTypesUnion,
      ListCertificateAuthoritiesOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListCertificateAuthorities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCertificateAuthoritiesInput,
    ListCertificateAuthoritiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListCertificateAuthoritiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCertificateAuthoritiesInput,
    ListCertificateAuthoritiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListCertificateAuthoritiesInput,
        ListCertificateAuthoritiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
