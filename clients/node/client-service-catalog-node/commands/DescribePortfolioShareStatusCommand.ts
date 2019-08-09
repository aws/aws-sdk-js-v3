import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePortfolioShareStatus } from "../model/DescribePortfolioShareStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePortfolioShareStatusInput } from "../types/DescribePortfolioShareStatusInput";
import { DescribePortfolioShareStatusOutput } from "../types/DescribePortfolioShareStatusOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribePortfolioShareStatusInput";
export * from "../types/DescribePortfolioShareStatusOutput";
export * from "../types/DescribePortfolioShareStatusExceptionsUnion";

export class DescribePortfolioShareStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePortfolioShareStatusInput,
      OutputTypesUnion,
      DescribePortfolioShareStatusOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePortfolioShareStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePortfolioShareStatusInput,
    DescribePortfolioShareStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePortfolioShareStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePortfolioShareStatusInput,
    DescribePortfolioShareStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePortfolioShareStatusInput,
        DescribePortfolioShareStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
