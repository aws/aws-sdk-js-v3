import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateProductWithPortfolio } from "../model/operations/AssociateProductWithPortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateProductWithPortfolioInput } from "../types/AssociateProductWithPortfolioInput";
import { AssociateProductWithPortfolioOutput } from "../types/AssociateProductWithPortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AssociateProductWithPortfolioInput";
export * from "../types/AssociateProductWithPortfolioOutput";
export * from "../types/AssociateProductWithPortfolioExceptionsUnion";

export class AssociateProductWithPortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateProductWithPortfolioInput,
      OutputTypesUnion,
      AssociateProductWithPortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateProductWithPortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateProductWithPortfolioInput,
    AssociateProductWithPortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateProductWithPortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateProductWithPortfolioInput,
    AssociateProductWithPortfolioOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateProductWithPortfolioInput,
        AssociateProductWithPortfolioOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
