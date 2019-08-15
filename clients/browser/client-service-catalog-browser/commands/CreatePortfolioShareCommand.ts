import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePortfolioShare } from "../model/operations/CreatePortfolioShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePortfolioShareInput } from "../types/CreatePortfolioShareInput";
import { CreatePortfolioShareOutput } from "../types/CreatePortfolioShareOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/CreatePortfolioShareInput";
export * from "../types/CreatePortfolioShareOutput";
export * from "../types/CreatePortfolioShareExceptionsUnion";

export class CreatePortfolioShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePortfolioShareInput,
      OutputTypesUnion,
      CreatePortfolioShareOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePortfolioShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePortfolioShareInput,
    CreatePortfolioShareOutput,
    Blob
  >();

  constructor(readonly input: CreatePortfolioShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePortfolioShareInput,
    CreatePortfolioShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePortfolioShareInput, CreatePortfolioShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
