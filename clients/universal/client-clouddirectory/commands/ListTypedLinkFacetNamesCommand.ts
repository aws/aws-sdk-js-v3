import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTypedLinkFacetNames } from "../model/ListTypedLinkFacetNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTypedLinkFacetNamesInput } from "../types/ListTypedLinkFacetNamesInput";
import { ListTypedLinkFacetNamesOutput } from "../types/ListTypedLinkFacetNamesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListTypedLinkFacetNamesInput";
export * from "../types/ListTypedLinkFacetNamesOutput";
export * from "../types/ListTypedLinkFacetNamesExceptionsUnion";

export class ListTypedLinkFacetNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTypedLinkFacetNamesInput,
      OutputTypesUnion,
      ListTypedLinkFacetNamesOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTypedLinkFacetNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTypedLinkFacetNamesInput,
    ListTypedLinkFacetNamesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTypedLinkFacetNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTypedLinkFacetNamesInput,
    ListTypedLinkFacetNamesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTypedLinkFacetNamesInput, ListTypedLinkFacetNamesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
