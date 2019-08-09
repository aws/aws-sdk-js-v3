import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = GetDocumentationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentationVersionInput,
    GetDocumentationVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDocumentationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
