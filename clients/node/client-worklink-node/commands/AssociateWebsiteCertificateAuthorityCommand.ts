import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateWebsiteCertificateAuthority } from "../model/AssociateWebsiteCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateWebsiteCertificateAuthorityInput } from "../types/AssociateWebsiteCertificateAuthorityInput";
import { AssociateWebsiteCertificateAuthorityOutput } from "../types/AssociateWebsiteCertificateAuthorityOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/AssociateWebsiteCertificateAuthorityInput";
export * from "../types/AssociateWebsiteCertificateAuthorityOutput";
export * from "../types/AssociateWebsiteCertificateAuthorityExceptionsUnion";

export class AssociateWebsiteCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateWebsiteCertificateAuthorityInput,
      OutputTypesUnion,
      AssociateWebsiteCertificateAuthorityOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateWebsiteCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateWebsiteCertificateAuthorityInput,
    AssociateWebsiteCertificateAuthorityOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateWebsiteCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateWebsiteCertificateAuthorityInput,
    AssociateWebsiteCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateWebsiteCertificateAuthorityInput,
        AssociateWebsiteCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
