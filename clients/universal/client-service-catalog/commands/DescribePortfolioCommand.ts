import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePortfolio } from "../model/DescribePortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePortfolioInput } from "../types/DescribePortfolioInput";
import { DescribePortfolioOutput } from "../types/DescribePortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribePortfolioInput";
export * from "../types/DescribePortfolioOutput";
export * from "../types/DescribePortfolioExceptionsUnion";

export class DescribePortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePortfolioInput,
      OutputTypesUnion,
      DescribePortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribePortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePortfolioInput,
    DescribePortfolioOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribePortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePortfolioInput, DescribePortfolioOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePortfolioInput, DescribePortfolioOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
