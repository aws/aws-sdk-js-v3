import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartDocumentTextDetection } from "../model/StartDocumentTextDetection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDocumentTextDetectionInput } from "../types/StartDocumentTextDetectionInput";
import { StartDocumentTextDetectionOutput } from "../types/StartDocumentTextDetectionOutput";
import { TextractResolvedConfiguration } from "../TextractConfiguration";
export * from "../types/StartDocumentTextDetectionInput";
export * from "../types/StartDocumentTextDetectionOutput";
export * from "../types/StartDocumentTextDetectionExceptionsUnion";

export class StartDocumentTextDetectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDocumentTextDetectionInput,
      OutputTypesUnion,
      StartDocumentTextDetectionOutput,
      TextractResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartDocumentTextDetection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDocumentTextDetectionInput,
    StartDocumentTextDetectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartDocumentTextDetectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: TextractResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDocumentTextDetectionInput,
    StartDocumentTextDetectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartDocumentTextDetectionInput,
        StartDocumentTextDetectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
