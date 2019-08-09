import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDocumentationVersion } from "../model/UpdateDocumentationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentationVersionInput } from "../types/UpdateDocumentationVersionInput";
import { UpdateDocumentationVersionOutput } from "../types/UpdateDocumentationVersionOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateDocumentationVersionInput";
export * from "../types/UpdateDocumentationVersionOutput";
export * from "../types/UpdateDocumentationVersionExceptionsUnion";

export class UpdateDocumentationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentationVersionInput,
      OutputTypesUnion,
      UpdateDocumentationVersionOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDocumentationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentationVersionInput,
    UpdateDocumentationVersionOutput,
    Blob
  >();

  constructor(readonly input: UpdateDocumentationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDocumentationVersionInput,
    UpdateDocumentationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateDocumentationVersionInput,
        UpdateDocumentationVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
