import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentationVersion } from "../model/GetDocumentationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentationVersionInput } from "../types/GetDocumentationVersionInput";
import { GetDocumentationVersionOutput } from "../types/GetDocumentationVersionOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDocumentationVersionInput";
export * from "../types/GetDocumentationVersionOutput";
export * from "../types/GetDocumentationVersionExceptionsUnion";

export class GetDocumentationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentationVersionInput,
      OutputTypesUnion,
      GetDocumentationVersionOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetDocumentationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentationVersionInput,
    GetDocumentationVersionOutput,
    Blob
  >();

  constructor(readonly input: GetDocumentationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentationVersionInput,
    GetDocumentationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentationVersionInput, GetDocumentationVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
