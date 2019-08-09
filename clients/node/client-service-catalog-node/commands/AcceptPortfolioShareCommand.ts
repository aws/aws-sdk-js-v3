import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptPortfolioShare } from "../model/AcceptPortfolioShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptPortfolioShareInput } from "../types/AcceptPortfolioShareInput";
import { AcceptPortfolioShareOutput } from "../types/AcceptPortfolioShareOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/AcceptPortfolioShareInput";
export * from "../types/AcceptPortfolioShareOutput";
export * from "../types/AcceptPortfolioShareExceptionsUnion";

export class AcceptPortfolioShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptPortfolioShareInput,
      OutputTypesUnion,
      AcceptPortfolioShareOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcceptPortfolioShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptPortfolioShareInput,
    AcceptPortfolioShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptPortfolioShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptPortfolioShareInput,
    AcceptPortfolioShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptPortfolioShareInput, AcceptPortfolioShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
