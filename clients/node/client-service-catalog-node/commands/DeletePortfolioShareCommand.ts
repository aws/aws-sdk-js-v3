import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeletePortfolioShare } from "../model/operations/DeletePortfolioShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePortfolioShareInput } from "../types/DeletePortfolioShareInput";
import { DeletePortfolioShareOutput } from "../types/DeletePortfolioShareOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DeletePortfolioShareInput";
export * from "../types/DeletePortfolioShareOutput";
export * from "../types/DeletePortfolioShareExceptionsUnion";

export class DeletePortfolioShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePortfolioShareInput,
      OutputTypesUnion,
      DeletePortfolioShareOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeletePortfolioShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePortfolioShareInput,
    DeletePortfolioShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeletePortfolioShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePortfolioShareInput,
    DeletePortfolioShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePortfolioShareInput, DeletePortfolioShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
