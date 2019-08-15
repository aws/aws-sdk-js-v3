import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTypedLinkFacet } from "../model/operations/DeleteTypedLinkFacet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTypedLinkFacetInput } from "../types/DeleteTypedLinkFacetInput";
import { DeleteTypedLinkFacetOutput } from "../types/DeleteTypedLinkFacetOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/DeleteTypedLinkFacetInput";
export * from "../types/DeleteTypedLinkFacetOutput";
export * from "../types/DeleteTypedLinkFacetExceptionsUnion";

export class DeleteTypedLinkFacetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTypedLinkFacetInput,
      OutputTypesUnion,
      DeleteTypedLinkFacetOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTypedLinkFacet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTypedLinkFacetInput,
    DeleteTypedLinkFacetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTypedLinkFacetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTypedLinkFacetInput,
    DeleteTypedLinkFacetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTypedLinkFacetInput, DeleteTypedLinkFacetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
