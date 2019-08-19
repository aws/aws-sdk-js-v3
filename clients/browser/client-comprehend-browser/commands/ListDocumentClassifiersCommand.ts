import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDocumentClassifiers } from "../model/operations/ListDocumentClassifiers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDocumentClassifiersInput } from "../types/ListDocumentClassifiersInput";
import { ListDocumentClassifiersOutput } from "../types/ListDocumentClassifiersOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListDocumentClassifiersInput";
export * from "../types/ListDocumentClassifiersOutput";
export * from "../types/ListDocumentClassifiersExceptionsUnion";

export class ListDocumentClassifiersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDocumentClassifiersInput,
      OutputTypesUnion,
      ListDocumentClassifiersOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = ListDocumentClassifiers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDocumentClassifiersInput,
    ListDocumentClassifiersOutput,
    Blob
  >();

  constructor(readonly input: ListDocumentClassifiersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDocumentClassifiersInput,
    ListDocumentClassifiersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDocumentClassifiersInput, ListDocumentClassifiersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
