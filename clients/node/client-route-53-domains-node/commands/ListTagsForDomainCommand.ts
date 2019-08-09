import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsForDomain } from "../model/ListTagsForDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForDomainInput } from "../types/ListTagsForDomainInput";
import { ListTagsForDomainOutput } from "../types/ListTagsForDomainOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/ListTagsForDomainInput";
export * from "../types/ListTagsForDomainOutput";
export * from "../types/ListTagsForDomainExceptionsUnion";

export class ListTagsForDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForDomainInput,
      OutputTypesUnion,
      ListTagsForDomainOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsForDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForDomainInput,
    ListTagsForDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsForDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTagsForDomainInput, ListTagsForDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForDomainInput, ListTagsForDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
