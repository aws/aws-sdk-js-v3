import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociatePrincipalFromPortfolio } from "../model/operations/DisassociatePrincipalFromPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociatePrincipalFromPortfolioInput } from "../types/DisassociatePrincipalFromPortfolioInput";
import { DisassociatePrincipalFromPortfolioOutput } from "../types/DisassociatePrincipalFromPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DisassociatePrincipalFromPortfolioInput";
export * from "../types/DisassociatePrincipalFromPortfolioOutput";
export * from "../types/DisassociatePrincipalFromPortfolioExceptionsUnion";

export class DisassociatePrincipalFromPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociatePrincipalFromPortfolioInput,
      OutputTypesUnion,
      DisassociatePrincipalFromPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociatePrincipalFromPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociatePrincipalFromPortfolioInput,
    DisassociatePrincipalFromPortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociatePrincipalFromPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociatePrincipalFromPortfolioInput,
    DisassociatePrincipalFromPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociatePrincipalFromPortfolioInput,
        DisassociatePrincipalFromPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
