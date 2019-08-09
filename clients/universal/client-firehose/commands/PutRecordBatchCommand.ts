import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRecordBatch } from "../model/PutRecordBatch";
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
      Uint8Array
    > {
  readonly model = PutRecordBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRecordBatchInput,
    PutRecordBatchOutput,
    Uint8Array
  >();

  constructor(readonly input: PutRecordBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
