import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDocumentVersions } from "../model/ListDocumentVersions";
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
      Uint8Array
    > {
  readonly model = ListDocumentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDocumentVersionsInput,
    ListDocumentVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDocumentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
