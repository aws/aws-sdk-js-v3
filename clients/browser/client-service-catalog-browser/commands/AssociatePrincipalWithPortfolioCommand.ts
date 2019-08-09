import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociatePrincipalWithPortfolio } from "../model/AssociatePrincipalWithPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociatePrincipalWithPortfolioInput } from "../types/AssociatePrincipalWithPortfolioInput";
import { AssociatePrincipalWithPortfolioOutput } from "../types/AssociatePrincipalWithPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AssociatePrincipalWithPortfolioInput";
export * from "../types/AssociatePrincipalWithPortfolioOutput";
export * from "../types/AssociatePrincipalWithPortfolioExceptionsUnion";

export class AssociatePrincipalWithPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociatePrincipalWithPortfolioInput,
      OutputTypesUnion,
      AssociatePrincipalWithPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = AssociatePrincipalWithPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociatePrincipalWithPortfolioInput,
    AssociatePrincipalWithPortfolioOutput,
    Blob
  >();

  constructor(readonly input: AssociatePrincipalWithPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociatePrincipalWithPortfolioInput,
    AssociatePrincipalWithPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociatePrincipalWithPortfolioInput,
        AssociatePrincipalWithPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
