import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGroupCertificateAuthorities } from "../model/operations/ListGroupCertificateAuthorities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGroupCertificateAuthoritiesInput } from "../types/ListGroupCertificateAuthoritiesInput";
import { ListGroupCertificateAuthoritiesOutput } from "../types/ListGroupCertificateAuthoritiesOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/ListGroupCertificateAuthoritiesInput";
export * from "../types/ListGroupCertificateAuthoritiesOutput";
export * from "../types/ListGroupCertificateAuthoritiesExceptionsUnion";

export class ListGroupCertificateAuthoritiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGroupCertificateAuthoritiesInput,
      OutputTypesUnion,
      ListGroupCertificateAuthoritiesOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = ListGroupCertificateAuthorities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGroupCertificateAuthoritiesInput,
    ListGroupCertificateAuthoritiesOutput,
    Blob
  >();

  constructor(readonly input: ListGroupCertificateAuthoritiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListGroupCertificateAuthoritiesInput,
    ListGroupCertificateAuthoritiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListGroupCertificateAuthoritiesInput,
        ListGroupCertificateAuthoritiesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
