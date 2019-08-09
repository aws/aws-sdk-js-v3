import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWebsiteCertificateAuthority } from "../model/DescribeWebsiteCertificateAuthority";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWebsiteCertificateAuthorityInput } from "../types/DescribeWebsiteCertificateAuthorityInput";
import { DescribeWebsiteCertificateAuthorityOutput } from "../types/DescribeWebsiteCertificateAuthorityOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeWebsiteCertificateAuthorityInput";
export * from "../types/DescribeWebsiteCertificateAuthorityOutput";
export * from "../types/DescribeWebsiteCertificateAuthorityExceptionsUnion";

export class DescribeWebsiteCertificateAuthorityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWebsiteCertificateAuthorityInput,
      OutputTypesUnion,
      DescribeWebsiteCertificateAuthorityOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeWebsiteCertificateAuthority;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWebsiteCertificateAuthorityInput,
    DescribeWebsiteCertificateAuthorityOutput,
    Blob
  >();

  constructor(readonly input: DescribeWebsiteCertificateAuthorityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWebsiteCertificateAuthorityInput,
    DescribeWebsiteCertificateAuthorityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeWebsiteCertificateAuthorityInput,
        DescribeWebsiteCertificateAuthorityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
