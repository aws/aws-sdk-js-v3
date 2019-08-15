import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTypedLinkFacetAttributes } from "../model/operations/ListTypedLinkFacetAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTypedLinkFacetAttributesInput } from "../types/ListTypedLinkFacetAttributesInput";
import { ListTypedLinkFacetAttributesOutput } from "../types/ListTypedLinkFacetAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListTypedLinkFacetAttributesInput";
export * from "../types/ListTypedLinkFacetAttributesOutput";
export * from "../types/ListTypedLinkFacetAttributesExceptionsUnion";

export class ListTypedLinkFacetAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTypedLinkFacetAttributesInput,
      OutputTypesUnion,
      ListTypedLinkFacetAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTypedLinkFacetAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTypedLinkFacetAttributesInput,
    ListTypedLinkFacetAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTypedLinkFacetAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTypedLinkFacetAttributesInput,
    ListTypedLinkFacetAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListTypedLinkFacetAttributesInput,
        ListTypedLinkFacetAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
