import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDeleteImage } from "../model/operations/BatchDeleteImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeleteImageInput } from "../types/BatchDeleteImageInput";
import { BatchDeleteImageOutput } from "../types/BatchDeleteImageOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/BatchDeleteImageInput";
export * from "../types/BatchDeleteImageOutput";
export * from "../types/BatchDeleteImageExceptionsUnion";

export class BatchDeleteImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeleteImageInput,
      OutputTypesUnion,
      BatchDeleteImageOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDeleteImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeleteImageInput,
    BatchDeleteImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDeleteImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchDeleteImageInput, BatchDeleteImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeleteImageInput, BatchDeleteImageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
