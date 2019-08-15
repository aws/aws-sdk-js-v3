import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFacetAttributes } from "../model/operations/ListFacetAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFacetAttributesInput } from "../types/ListFacetAttributesInput";
import { ListFacetAttributesOutput } from "../types/ListFacetAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListFacetAttributesInput";
export * from "../types/ListFacetAttributesOutput";
export * from "../types/ListFacetAttributesExceptionsUnion";

export class ListFacetAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFacetAttributesInput,
      OutputTypesUnion,
      ListFacetAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFacetAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFacetAttributesInput,
    ListFacetAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFacetAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListFacetAttributesInput,
    ListFacetAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFacetAttributesInput, ListFacetAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
