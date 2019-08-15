import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListConstraintsForPortfolio } from "../model/operations/ListConstraintsForPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListConstraintsForPortfolioInput } from "../types/ListConstraintsForPortfolioInput";
import { ListConstraintsForPortfolioOutput } from "../types/ListConstraintsForPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListConstraintsForPortfolioInput";
export * from "../types/ListConstraintsForPortfolioOutput";
export * from "../types/ListConstraintsForPortfolioExceptionsUnion";

export class ListConstraintsForPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListConstraintsForPortfolioInput,
      OutputTypesUnion,
      ListConstraintsForPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListConstraintsForPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListConstraintsForPortfolioInput,
    ListConstraintsForPortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListConstraintsForPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListConstraintsForPortfolioInput,
    ListConstraintsForPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListConstraintsForPortfolioInput,
        ListConstraintsForPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
