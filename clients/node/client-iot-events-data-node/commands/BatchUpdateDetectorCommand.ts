import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchUpdateDetector } from "../model/operations/BatchUpdateDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchUpdateDetectorInput } from "../types/BatchUpdateDetectorInput";
import { BatchUpdateDetectorOutput } from "../types/BatchUpdateDetectorOutput";
import { IoTEventsDataResolvedConfiguration } from "../IoTEventsDataConfiguration";
export * from "../types/BatchUpdateDetectorInput";
export * from "../types/BatchUpdateDetectorOutput";
export * from "../types/BatchUpdateDetectorExceptionsUnion";

export class BatchUpdateDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchUpdateDetectorInput,
      OutputTypesUnion,
      BatchUpdateDetectorOutput,
      IoTEventsDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchUpdateDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchUpdateDetectorInput,
    BatchUpdateDetectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchUpdateDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsDataResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchUpdateDetectorInput,
    BatchUpdateDetectorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchUpdateDetectorInput, BatchUpdateDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
