import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDocumentationPart } from "../model/DeleteDocumentationPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDocumentationPartInput } from "../types/DeleteDocumentationPartInput";
import { DeleteDocumentationPartOutput } from "../types/DeleteDocumentationPartOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteDocumentationPartInput";
export * from "../types/DeleteDocumentationPartOutput";
export * from "../types/DeleteDocumentationPartExceptionsUnion";

export class DeleteDocumentationPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDocumentationPartInput,
      OutputTypesUnion,
      DeleteDocumentationPartOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDocumentationPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDocumentationPartInput,
    DeleteDocumentationPartOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDocumentationPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDocumentationPartInput,
    DeleteDocumentationPartOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDocumentationPartInput, DeleteDocumentationPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
