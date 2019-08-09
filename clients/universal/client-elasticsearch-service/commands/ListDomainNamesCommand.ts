import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDomainNames } from "../model/ListDomainNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDomainNamesInput } from "../types/ListDomainNamesInput";
import { ListDomainNamesOutput } from "../types/ListDomainNamesOutput";
import { ElasticsearchServiceResolvedConfiguration } from "../ElasticsearchServiceConfiguration";
export * from "../types/ListDomainNamesInput";
export * from "../types/ListDomainNamesOutput";
export * from "../types/ListDomainNamesExceptionsUnion";

export class ListDomainNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDomainNamesInput,
      OutputTypesUnion,
      ListDomainNamesOutput,
      ElasticsearchServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDomainNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDomainNamesInput,
    ListDomainNamesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDomainNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticsearchServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDomainNamesInput, ListDomainNamesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDomainNamesInput, ListDomainNamesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
