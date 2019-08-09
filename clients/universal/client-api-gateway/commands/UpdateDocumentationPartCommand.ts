import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDocumentationPart } from "../model/UpdateDocumentationPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDocumentationPartInput } from "../types/UpdateDocumentationPartInput";
import { UpdateDocumentationPartOutput } from "../types/UpdateDocumentationPartOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateDocumentationPartInput";
export * from "../types/UpdateDocumentationPartOutput";
export * from "../types/UpdateDocumentationPartExceptionsUnion";

export class UpdateDocumentationPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDocumentationPartInput,
      OutputTypesUnion,
      UpdateDocumentationPartOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateDocumentationPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDocumentationPartInput,
    UpdateDocumentationPartOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateDocumentationPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDocumentationPartInput,
    UpdateDocumentationPartOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDocumentationPartInput, UpdateDocumentationPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
