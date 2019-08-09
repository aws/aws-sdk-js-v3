import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIncomingTypedLinks } from "../model/ListIncomingTypedLinks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIncomingTypedLinksInput } from "../types/ListIncomingTypedLinksInput";
import { ListIncomingTypedLinksOutput } from "../types/ListIncomingTypedLinksOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListIncomingTypedLinksInput";
export * from "../types/ListIncomingTypedLinksOutput";
export * from "../types/ListIncomingTypedLinksExceptionsUnion";

export class ListIncomingTypedLinksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIncomingTypedLinksInput,
      OutputTypesUnion,
      ListIncomingTypedLinksOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListIncomingTypedLinks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIncomingTypedLinksInput,
    ListIncomingTypedLinksOutput,
    Blob
  >();

  constructor(readonly input: ListIncomingTypedLinksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListIncomingTypedLinksInput,
    ListIncomingTypedLinksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIncomingTypedLinksInput, ListIncomingTypedLinksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
