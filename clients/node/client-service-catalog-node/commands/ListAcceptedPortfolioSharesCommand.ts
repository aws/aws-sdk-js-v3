import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAcceptedPortfolioShares } from "../model/ListAcceptedPortfolioShares";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAcceptedPortfolioSharesInput } from "../types/ListAcceptedPortfolioSharesInput";
import { ListAcceptedPortfolioSharesOutput } from "../types/ListAcceptedPortfolioSharesOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListAcceptedPortfolioSharesInput";
export * from "../types/ListAcceptedPortfolioSharesOutput";
export * from "../types/ListAcceptedPortfolioSharesExceptionsUnion";

export class ListAcceptedPortfolioSharesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAcceptedPortfolioSharesInput,
      OutputTypesUnion,
      ListAcceptedPortfolioSharesOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAcceptedPortfolioShares;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAcceptedPortfolioSharesInput,
    ListAcceptedPortfolioSharesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAcceptedPortfolioSharesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAcceptedPortfolioSharesInput,
    ListAcceptedPortfolioSharesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListAcceptedPortfolioSharesInput,
        ListAcceptedPortfolioSharesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
