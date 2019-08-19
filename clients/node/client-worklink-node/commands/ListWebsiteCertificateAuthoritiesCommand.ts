import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListWebsiteCertificateAuthorities } from "../model/operations/ListWebsiteCertificateAuthorities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWebsiteCertificateAuthoritiesInput } from "../types/ListWebsiteCertificateAuthoritiesInput";
import { ListWebsiteCertificateAuthoritiesOutput } from "../types/ListWebsiteCertificateAuthoritiesOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/ListWebsiteCertificateAuthoritiesInput";
export * from "../types/ListWebsiteCertificateAuthoritiesOutput";
export * from "../types/ListWebsiteCertificateAuthoritiesExceptionsUnion";

export class ListWebsiteCertificateAuthoritiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWebsiteCertificateAuthoritiesInput,
      OutputTypesUnion,
      ListWebsiteCertificateAuthoritiesOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListWebsiteCertificateAuthorities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWebsiteCertificateAuthoritiesInput,
    ListWebsiteCertificateAuthoritiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListWebsiteCertificateAuthoritiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListWebsiteCertificateAuthoritiesInput,
    ListWebsiteCertificateAuthoritiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListWebsiteCertificateAuthoritiesInput,
        ListWebsiteCertificateAuthoritiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
