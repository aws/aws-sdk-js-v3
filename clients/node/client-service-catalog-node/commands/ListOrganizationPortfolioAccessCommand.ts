import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOrganizationPortfolioAccess } from "../model/operations/ListOrganizationPortfolioAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOrganizationPortfolioAccessInput } from "../types/ListOrganizationPortfolioAccessInput";
import { ListOrganizationPortfolioAccessOutput } from "../types/ListOrganizationPortfolioAccessOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListOrganizationPortfolioAccessInput";
export * from "../types/ListOrganizationPortfolioAccessOutput";
export * from "../types/ListOrganizationPortfolioAccessExceptionsUnion";

export class ListOrganizationPortfolioAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOrganizationPortfolioAccessInput,
      OutputTypesUnion,
      ListOrganizationPortfolioAccessOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOrganizationPortfolioAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOrganizationPortfolioAccessInput,
    ListOrganizationPortfolioAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOrganizationPortfolioAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOrganizationPortfolioAccessInput,
    ListOrganizationPortfolioAccessOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListOrganizationPortfolioAccessInput,
        ListOrganizationPortfolioAccessOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
