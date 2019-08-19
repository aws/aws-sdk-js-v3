import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourcesForTagOption } from "../model/operations/ListResourcesForTagOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourcesForTagOptionInput } from "../types/ListResourcesForTagOptionInput";
import { ListResourcesForTagOptionOutput } from "../types/ListResourcesForTagOptionOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListResourcesForTagOptionInput";
export * from "../types/ListResourcesForTagOptionOutput";
export * from "../types/ListResourcesForTagOptionExceptionsUnion";

export class ListResourcesForTagOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourcesForTagOptionInput,
      OutputTypesUnion,
      ListResourcesForTagOptionOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourcesForTagOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourcesForTagOptionInput,
    ListResourcesForTagOptionOutput,
    Blob
  >();

  constructor(readonly input: ListResourcesForTagOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourcesForTagOptionInput,
    ListResourcesForTagOptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourcesForTagOptionInput, ListResourcesForTagOptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
