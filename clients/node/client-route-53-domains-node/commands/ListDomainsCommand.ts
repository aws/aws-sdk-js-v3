import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDomains } from "../model/operations/ListDomains";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDomainsInput } from "../types/ListDomainsInput";
import { ListDomainsOutput } from "../types/ListDomainsOutput";
import { Route53DomainsResolvedConfiguration } from "../Route53DomainsConfiguration";
export * from "../types/ListDomainsInput";
export * from "../types/ListDomainsOutput";
export * from "../types/ListDomainsExceptionsUnion";

export class ListDomainsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDomainsInput,
      OutputTypesUnion,
      ListDomainsOutput,
      Route53DomainsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDomains;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDomainsInput,
    ListDomainsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDomainsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53DomainsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDomainsInput, ListDomainsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDomainsInput, ListDomainsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
