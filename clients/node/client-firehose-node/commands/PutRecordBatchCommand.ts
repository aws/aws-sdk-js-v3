import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutRecordBatch } from "../model/operations/PutRecordBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRecordBatchInput } from "../types/PutRecordBatchInput";
import { PutRecordBatchOutput } from "../types/PutRecordBatchOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/PutRecordBatchInput";
export * from "../types/PutRecordBatchOutput";
export * from "../types/PutRecordBatchExceptionsUnion";

export class PutRecordBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRecordBatchInput,
      OutputTypesUnion,
      PutRecordBatchOutput,
      FirehoseResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutRecordBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRecordBatchInput,
    PutRecordBatchOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutRecordBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRecordBatchInput, PutRecordBatchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRecordBatchInput, PutRecordBatchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
