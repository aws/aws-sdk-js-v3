import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDocuments } from "../model/operations/ListDocuments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDocumentsInput } from "../types/ListDocumentsInput";
import { ListDocumentsOutput } from "../types/ListDocumentsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListDocumentsInput";
export * from "../types/ListDocumentsOutput";
export * from "../types/ListDocumentsExceptionsUnion";

export class ListDocumentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDocumentsInput,
      OutputTypesUnion,
      ListDocumentsOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = ListDocuments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDocumentsInput,
    ListDocumentsOutput,
    Blob
  >();

  constructor(readonly input: ListDocumentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDocumentsInput, ListDocumentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDocumentsInput, ListDocumentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
