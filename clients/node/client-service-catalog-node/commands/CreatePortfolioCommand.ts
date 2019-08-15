import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePortfolio } from "../model/operations/CreatePortfolio";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePortfolioInput } from "../types/CreatePortfolioInput";
import { CreatePortfolioOutput } from "../types/CreatePortfolioOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreatePortfolioInput";
export * from "../types/CreatePortfolioOutput";
export * from "../types/CreatePortfolioExceptionsUnion";

export class CreatePortfolioCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePortfolioInput,
      OutputTypesUnion,
      CreatePortfolioOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePortfolio;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePortfolioInput,
    CreatePortfolioOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePortfolioInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePortfolioInput, CreatePortfolioOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePortfolioInput, CreatePortfolioOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
