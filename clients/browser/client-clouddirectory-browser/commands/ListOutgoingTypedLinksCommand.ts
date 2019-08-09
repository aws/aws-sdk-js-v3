import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListOutgoingTypedLinks } from "../model/ListOutgoingTypedLinks";
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
      Blob
    > {
  readonly model = ListOutgoingTypedLinks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOutgoingTypedLinksInput,
    ListOutgoingTypedLinksOutput,
    Blob
  >();

  constructor(readonly input: ListOutgoingTypedLinksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
