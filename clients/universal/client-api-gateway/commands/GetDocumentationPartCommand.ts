import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentationPart } from "../model/GetDocumentationPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentationPartInput } from "../types/GetDocumentationPartInput";
import { GetDocumentationPartOutput } from "../types/GetDocumentationPartOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDocumentationPartInput";
export * from "../types/GetDocumentationPartOutput";
export * from "../types/GetDocumentationPartExceptionsUnion";

export class GetDocumentationPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentationPartInput,
      OutputTypesUnion,
      GetDocumentationPartOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDocumentationPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentationPartInput,
    GetDocumentationPartOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDocumentationPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentationPartInput,
    GetDocumentationPartOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentationPartInput, GetDocumentationPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
