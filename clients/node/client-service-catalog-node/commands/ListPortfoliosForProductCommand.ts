import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPortfoliosForProduct } from "../model/operations/ListPortfoliosForProduct";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPortfoliosForProductInput } from "../types/ListPortfoliosForProductInput";
import { ListPortfoliosForProductOutput } from "../types/ListPortfoliosForProductOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListPortfoliosForProductInput";
export * from "../types/ListPortfoliosForProductOutput";
export * from "../types/ListPortfoliosForProductExceptionsUnion";

export class ListPortfoliosForProductCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPortfoliosForProductInput,
      OutputTypesUnion,
      ListPortfoliosForProductOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPortfoliosForProduct;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPortfoliosForProductInput,
    ListPortfoliosForProductOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPortfoliosForProductInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPortfoliosForProductInput,
    ListPortfoliosForProductOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPortfoliosForProductInput, ListPortfoliosForProductOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
