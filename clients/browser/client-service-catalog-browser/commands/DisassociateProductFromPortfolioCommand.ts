import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateProductFromPortfolio } from "../model/operations/DisassociateProductFromPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateProductFromPortfolioInput } from "../types/DisassociateProductFromPortfolioInput";
import { DisassociateProductFromPortfolioOutput } from "../types/DisassociateProductFromPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisassociateProductFromPortfolioInput";
export * from "../types/DisassociateProductFromPortfolioOutput";
export * from "../types/DisassociateProductFromPortfolioExceptionsUnion";

export class DisassociateProductFromPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateProductFromPortfolioInput,
      OutputTypesUnion,
      DisassociateProductFromPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateProductFromPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateProductFromPortfolioInput,
    DisassociateProductFromPortfolioOutput,
    Blob
  >();

  constructor(readonly input: DisassociateProductFromPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateProductFromPortfolioInput,
    DisassociateProductFromPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateProductFromPortfolioInput,
        DisassociateProductFromPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
