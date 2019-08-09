import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDocumentationVersion } from "../model/DeleteDocumentationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDocumentationVersionInput } from "../types/DeleteDocumentationVersionInput";
import { DeleteDocumentationVersionOutput } from "../types/DeleteDocumentationVersionOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteDocumentationVersionInput";
export * from "../types/DeleteDocumentationVersionOutput";
export * from "../types/DeleteDocumentationVersionExceptionsUnion";

export class DeleteDocumentationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDocumentationVersionInput,
      OutputTypesUnion,
      DeleteDocumentationVersionOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteDocumentationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDocumentationVersionInput,
    DeleteDocumentationVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteDocumentationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDocumentationVersionInput,
    DeleteDocumentationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteDocumentationVersionInput,
        DeleteDocumentationVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
