import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectPortfolioShare } from "../model/operations/RejectPortfolioShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectPortfolioShareInput } from "../types/RejectPortfolioShareInput";
import { RejectPortfolioShareOutput } from "../types/RejectPortfolioShareOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/RejectPortfolioShareInput";
export * from "../types/RejectPortfolioShareOutput";
export * from "../types/RejectPortfolioShareExceptionsUnion";

export class RejectPortfolioShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectPortfolioShareInput,
      OutputTypesUnion,
      RejectPortfolioShareOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = RejectPortfolioShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectPortfolioShareInput,
    RejectPortfolioShareOutput,
    Blob
  >();

  constructor(readonly input: RejectPortfolioShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectPortfolioShareInput,
    RejectPortfolioShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RejectPortfolioShareInput, RejectPortfolioShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
