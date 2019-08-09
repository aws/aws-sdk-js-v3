import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDocumentationPart } from "../model/CreateDocumentationPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDocumentationPartInput } from "../types/CreateDocumentationPartInput";
import { CreateDocumentationPartOutput } from "../types/CreateDocumentationPartOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateDocumentationPartInput";
export * from "../types/CreateDocumentationPartOutput";
export * from "../types/CreateDocumentationPartExceptionsUnion";

export class CreateDocumentationPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDocumentationPartInput,
      OutputTypesUnion,
      CreateDocumentationPartOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateDocumentationPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDocumentationPartInput,
    CreateDocumentationPartOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateDocumentationPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDocumentationPartInput,
    CreateDocumentationPartOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDocumentationPartInput, CreateDocumentationPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
