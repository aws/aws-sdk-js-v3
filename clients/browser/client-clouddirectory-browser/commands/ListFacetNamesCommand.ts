import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListFacetNames } from "../model/ListFacetNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFacetNamesInput } from "../types/ListFacetNamesInput";
import { ListFacetNamesOutput } from "../types/ListFacetNamesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListFacetNamesInput";
export * from "../types/ListFacetNamesOutput";
export * from "../types/ListFacetNamesExceptionsUnion";

export class ListFacetNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFacetNamesInput,
      OutputTypesUnion,
      ListFacetNamesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListFacetNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFacetNamesInput,
    ListFacetNamesOutput,
    Blob
  >();

  constructor(readonly input: ListFacetNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFacetNamesInput, ListFacetNamesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFacetNamesInput, ListFacetNamesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
