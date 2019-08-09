import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDocumentVersion } from "../model/UpdateDocumentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentVersionInput } from "../types/UpdateDocumentVersionInput";
import { UpdateDocumentVersionOutput } from "../types/UpdateDocumentVersionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/UpdateDocumentVersionInput";
export * from "../types/UpdateDocumentVersionOutput";
export * from "../types/UpdateDocumentVersionExceptionsUnion";

export class UpdateDocumentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentVersionInput,
      OutputTypesUnion,
      UpdateDocumentVersionOutput,
      WorkDocsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateDocumentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentVersionInput,
    UpdateDocumentVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateDocumentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDocumentVersionInput,
    UpdateDocumentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDocumentVersionInput, UpdateDocumentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
