import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateWebsiteCertificateAuthority } from "../model/DisassociateWebsiteCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateWebsiteCertificateAuthorityInput } from "../types/DisassociateWebsiteCertificateAuthorityInput";
import { DisassociateWebsiteCertificateAuthorityOutput } from "../types/DisassociateWebsiteCertificateAuthorityOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DisassociateWebsiteCertificateAuthorityInput";
export * from "../types/DisassociateWebsiteCertificateAuthorityOutput";
export * from "../types/DisassociateWebsiteCertificateAuthorityExceptionsUnion";

export class DisassociateWebsiteCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateWebsiteCertificateAuthorityInput,
      OutputTypesUnion,
      DisassociateWebsiteCertificateAuthorityOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateWebsiteCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateWebsiteCertificateAuthorityInput,
    DisassociateWebsiteCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateWebsiteCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateWebsiteCertificateAuthorityInput,
    DisassociateWebsiteCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateWebsiteCertificateAuthorityInput,
        DisassociateWebsiteCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
