import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListDocumentVersions } from "../model/operations/ListDocumentVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDocumentVersionsInput } from "../types/ListDocumentVersionsInput";
import { ListDocumentVersionsOutput } from "../types/ListDocumentVersionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListDocumentVersionsInput";
export * from "../types/ListDocumentVersionsOutput";
export * from "../types/ListDocumentVersionsExceptionsUnion";

export class ListDocumentVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDocumentVersionsInput,
      OutputTypesUnion,
      ListDocumentVersionsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListDocumentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDocumentVersionsInput,
    ListDocumentVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListDocumentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDocumentVersionsInput,
    ListDocumentVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDocumentVersionsInput, ListDocumentVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
