import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPortfolios } from "../model/operations/ListPortfolios";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPortfoliosInput } from "../types/ListPortfoliosInput";
import { ListPortfoliosOutput } from "../types/ListPortfoliosOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListPortfoliosInput";
export * from "../types/ListPortfoliosOutput";
export * from "../types/ListPortfoliosExceptionsUnion";

export class ListPortfoliosCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPortfoliosInput,
      OutputTypesUnion,
      ListPortfoliosOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListPortfolios;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPortfoliosInput,
    ListPortfoliosOutput,
    Blob
  >();

  constructor(readonly input: ListPortfoliosInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPortfoliosInput, ListPortfoliosOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPortfoliosInput, ListPortfoliosOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
