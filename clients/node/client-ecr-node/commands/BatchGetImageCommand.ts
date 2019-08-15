import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchGetImage } from "../model/operations/BatchGetImage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetImageInput } from "../types/BatchGetImageInput";
import { BatchGetImageOutput } from "../types/BatchGetImageOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/BatchGetImageInput";
export * from "../types/BatchGetImageOutput";
export * from "../types/BatchGetImageExceptionsUnion";

export class BatchGetImageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetImageInput,
      OutputTypesUnion,
      BatchGetImageOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchGetImage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetImageInput,
    BatchGetImageOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchGetImageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetImageInput, BatchGetImageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetImageInput, BatchGetImageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
