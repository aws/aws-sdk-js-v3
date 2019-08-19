import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDocumentTextDetection } from "../model/operations/GetDocumentTextDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDocumentTextDetectionInput } from "../types/GetDocumentTextDetectionInput";
import { GetDocumentTextDetectionOutput } from "../types/GetDocumentTextDetectionOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/GetDocumentTextDetectionInput";
export * from "../types/GetDocumentTextDetectionOutput";
export * from "../types/GetDocumentTextDetectionExceptionsUnion";

export class GetDocumentTextDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDocumentTextDetectionInput,
      OutputTypesUnion,
      GetDocumentTextDetectionOutput,
      TextractResolvedConfiguration,
      Blob
    > {
  readonly model = GetDocumentTextDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDocumentTextDetectionInput,
    GetDocumentTextDetectionOutput,
    Blob
  >();

  constructor(readonly input: GetDocumentTextDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDocumentTextDetectionInput,
    GetDocumentTextDetectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDocumentTextDetectionInput, GetDocumentTextDetectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
