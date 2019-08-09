import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPortfolios } from "../model/ListPortfolios";
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
      Uint8Array
    > {
  readonly model = ListPortfolios;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPortfoliosInput,
    ListPortfoliosOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPortfoliosInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
