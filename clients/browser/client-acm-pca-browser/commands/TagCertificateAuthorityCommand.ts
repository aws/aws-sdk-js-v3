import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { TagCertificateAuthority } from "../model/operations/TagCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagCertificateAuthorityInput } from "../types/TagCertificateAuthorityInput";
import { TagCertificateAuthorityOutput } from "../types/TagCertificateAuthorityOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/TagCertificateAuthorityInput";
export * from "../types/TagCertificateAuthorityOutput";
export * from "../types/TagCertificateAuthorityExceptionsUnion";

export class TagCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagCertificateAuthorityInput,
      OutputTypesUnion,
      TagCertificateAuthorityOutput,
      ACMPCAResolvedConfiguration,
      Blob
    > {
  readonly model = TagCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagCertificateAuthorityInput,
    TagCertificateAuthorityOutput,
    Blob
  >();

  constructor(readonly input: TagCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<
    TagCertificateAuthorityInput,
    TagCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagCertificateAuthorityInput, TagCertificateAuthorityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
