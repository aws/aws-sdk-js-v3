import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDocumentationParts } from "../model/operations/GetDocumentationParts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentationPartsInput } from "../types/GetDocumentationPartsInput";
import { GetDocumentationPartsOutput } from "../types/GetDocumentationPartsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDocumentationPartsInput";
export * from "../types/GetDocumentationPartsOutput";
export * from "../types/GetDocumentationPartsExceptionsUnion";

export class GetDocumentationPartsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentationPartsInput,
      OutputTypesUnion,
      GetDocumentationPartsOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDocumentationParts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentationPartsInput,
    GetDocumentationPartsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDocumentationPartsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentationPartsInput,
    GetDocumentationPartsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentationPartsInput, GetDocumentationPartsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
