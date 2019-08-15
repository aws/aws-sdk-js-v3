import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOutgoingTypedLinks } from "../model/operations/ListOutgoingTypedLinks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOutgoingTypedLinksInput } from "../types/ListOutgoingTypedLinksInput";
import { ListOutgoingTypedLinksOutput } from "../types/ListOutgoingTypedLinksOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListOutgoingTypedLinksInput";
export * from "../types/ListOutgoingTypedLinksOutput";
export * from "../types/ListOutgoingTypedLinksExceptionsUnion";

export class ListOutgoingTypedLinksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOutgoingTypedLinksInput,
      OutputTypesUnion,
      ListOutgoingTypedLinksOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOutgoingTypedLinks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOutgoingTypedLinksInput,
    ListOutgoingTypedLinksOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOutgoingTypedLinksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOutgoingTypedLinksInput,
    ListOutgoingTypedLinksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOutgoingTypedLinksInput, ListOutgoingTypedLinksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
