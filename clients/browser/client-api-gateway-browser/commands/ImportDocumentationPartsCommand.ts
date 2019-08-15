import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportDocumentationParts } from "../model/operations/ImportDocumentationParts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportDocumentationPartsInput } from "../types/ImportDocumentationPartsInput";
import { ImportDocumentationPartsOutput } from "../types/ImportDocumentationPartsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/ImportDocumentationPartsInput";
export * from "../types/ImportDocumentationPartsOutput";
export * from "../types/ImportDocumentationPartsExceptionsUnion";

export class ImportDocumentationPartsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportDocumentationPartsInput,
      OutputTypesUnion,
      ImportDocumentationPartsOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = ImportDocumentationParts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportDocumentationPartsInput,
    ImportDocumentationPartsOutput,
    Blob
  >();

  constructor(readonly input: ImportDocumentationPartsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportDocumentationPartsInput,
    ImportDocumentationPartsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportDocumentationPartsInput, ImportDocumentationPartsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
