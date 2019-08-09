import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UploadLayerPart } from "../model/UploadLayerPart";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UploadLayerPartInput } from "../types/UploadLayerPartInput";
import { UploadLayerPartOutput } from "../types/UploadLayerPartOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/UploadLayerPartInput";
export * from "../types/UploadLayerPartOutput";
export * from "../types/UploadLayerPartExceptionsUnion";

export class UploadLayerPartCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UploadLayerPartInput,
      OutputTypesUnion,
      UploadLayerPartOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UploadLayerPart;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UploadLayerPartInput,
    UploadLayerPartOutput,
    _stream.Readable
  >();

  constructor(readonly input: UploadLayerPartInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<UploadLayerPartInput, UploadLayerPartOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UploadLayerPartInput, UploadLayerPartOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
