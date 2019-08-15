import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTagOptions } from "../model/operations/ListTagOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagOptionsInput } from "../types/ListTagOptionsInput";
import { ListTagOptionsOutput } from "../types/ListTagOptionsOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListTagOptionsInput";
export * from "../types/ListTagOptionsOutput";
export * from "../types/ListTagOptionsExceptionsUnion";

export class ListTagOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagOptionsInput,
      OutputTypesUnion,
      ListTagOptionsOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = ListTagOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagOptionsInput,
    ListTagOptionsOutput,
    Blob
  >();

  constructor(readonly input: ListTagOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTagOptionsInput, ListTagOptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagOptionsInput, ListTagOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
