import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPrincipalsForPortfolio } from "../model/operations/ListPrincipalsForPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPrincipalsForPortfolioInput } from "../types/ListPrincipalsForPortfolioInput";
import { ListPrincipalsForPortfolioOutput } from "../types/ListPrincipalsForPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListPrincipalsForPortfolioInput";
export * from "../types/ListPrincipalsForPortfolioOutput";
export * from "../types/ListPrincipalsForPortfolioExceptionsUnion";

export class ListPrincipalsForPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPrincipalsForPortfolioInput,
      OutputTypesUnion,
      ListPrincipalsForPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListPrincipalsForPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPrincipalsForPortfolioInput,
    ListPrincipalsForPortfolioOutput,
    Blob
  >();

  constructor(readonly input: ListPrincipalsForPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPrincipalsForPortfolioInput,
    ListPrincipalsForPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListPrincipalsForPortfolioInput,
        ListPrincipalsForPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
