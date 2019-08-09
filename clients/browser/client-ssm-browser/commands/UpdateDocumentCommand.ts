import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDocument } from "../model/UpdateDocument";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentInput } from "../types/UpdateDocumentInput";
import { UpdateDocumentOutput } from "../types/UpdateDocumentOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateDocumentInput";
export * from "../types/UpdateDocumentOutput";
export * from "../types/UpdateDocumentExceptionsUnion";

export class UpdateDocumentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentInput,
      OutputTypesUnion,
      UpdateDocumentOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDocument;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentInput,
    UpdateDocumentOutput,
    Blob
  >();

  constructor(readonly input: UpdateDocumentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDocumentInput, UpdateDocumentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDocumentInput, UpdateDocumentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
