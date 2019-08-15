import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchMeterUsage } from "../model/operations/BatchMeterUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchMeterUsageInput } from "../types/BatchMeterUsageInput";
import { BatchMeterUsageOutput } from "../types/BatchMeterUsageOutput";
import { MarketplaceMeteringResolvedConfiguration } from "../MarketplaceMeteringConfiguration";
export * from "../types/BatchMeterUsageInput";
export * from "../types/BatchMeterUsageOutput";
export * from "../types/BatchMeterUsageExceptionsUnion";

export class BatchMeterUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchMeterUsageInput,
      OutputTypesUnion,
      BatchMeterUsageOutput,
      MarketplaceMeteringResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchMeterUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchMeterUsageInput,
    BatchMeterUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchMeterUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MarketplaceMeteringResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchMeterUsageInput, BatchMeterUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchMeterUsageInput, BatchMeterUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
