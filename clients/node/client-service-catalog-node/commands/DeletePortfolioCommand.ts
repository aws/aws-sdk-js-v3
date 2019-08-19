import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePortfolio } from "../model/operations/DeletePortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePortfolioInput } from "../types/DeletePortfolioInput";
import { DeletePortfolioOutput } from "../types/DeletePortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeletePortfolioInput";
export * from "../types/DeletePortfolioOutput";
export * from "../types/DeletePortfolioExceptionsUnion";

export class DeletePortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePortfolioInput,
      OutputTypesUnion,
      DeletePortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePortfolioInput,
    DeletePortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<DeletePortfolioInput, DeletePortfolioOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePortfolioInput, DeletePortfolioOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
