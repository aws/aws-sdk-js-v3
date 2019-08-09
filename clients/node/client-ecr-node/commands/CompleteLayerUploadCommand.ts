import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CompleteLayerUpload } from "../model/CompleteLayerUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompleteLayerUploadInput } from "../types/CompleteLayerUploadInput";
import { CompleteLayerUploadOutput } from "../types/CompleteLayerUploadOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/CompleteLayerUploadInput";
export * from "../types/CompleteLayerUploadOutput";
export * from "../types/CompleteLayerUploadExceptionsUnion";

export class CompleteLayerUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompleteLayerUploadInput,
      OutputTypesUnion,
      CompleteLayerUploadOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CompleteLayerUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompleteLayerUploadInput,
    CompleteLayerUploadOutput,
    _stream.Readable
  >();

  constructor(readonly input: CompleteLayerUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CompleteLayerUploadInput,
    CompleteLayerUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CompleteLayerUploadInput, CompleteLayerUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
