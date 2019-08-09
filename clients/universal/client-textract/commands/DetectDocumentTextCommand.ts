import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectDocumentText } from "../model/DetectDocumentText";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectDocumentTextInput } from "../types/DetectDocumentTextInput";
import { DetectDocumentTextOutput } from "../types/DetectDocumentTextOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/DetectDocumentTextInput";
export * from "../types/DetectDocumentTextOutput";
export * from "../types/DetectDocumentTextExceptionsUnion";

export class DetectDocumentTextCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectDocumentTextInput,
      OutputTypesUnion,
      DetectDocumentTextOutput,
      TextractResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DetectDocumentText;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectDocumentTextInput,
    DetectDocumentTextOutput,
    Uint8Array
  >();

  constructor(readonly input: DetectDocumentTextInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DetectDocumentTextInput,
    DetectDocumentTextOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectDocumentTextInput, DetectDocumentTextOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
