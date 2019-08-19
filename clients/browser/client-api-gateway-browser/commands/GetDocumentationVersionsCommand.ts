import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentationVersions } from "../model/operations/GetDocumentationVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentationVersionsInput } from "../types/GetDocumentationVersionsInput";
import { GetDocumentationVersionsOutput } from "../types/GetDocumentationVersionsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetDocumentationVersionsInput";
export * from "../types/GetDocumentationVersionsOutput";
export * from "../types/GetDocumentationVersionsExceptionsUnion";

export class GetDocumentationVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentationVersionsInput,
      OutputTypesUnion,
      GetDocumentationVersionsOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetDocumentationVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentationVersionsInput,
    GetDocumentationVersionsOutput,
    Blob
  >();

  constructor(readonly input: GetDocumentationVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentationVersionsInput,
    GetDocumentationVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentationVersionsInput, GetDocumentationVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
