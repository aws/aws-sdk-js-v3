import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MeterUsage } from "../model/operations/MeterUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MeterUsageInput } from "../types/MeterUsageInput";
import { MeterUsageOutput } from "../types/MeterUsageOutput";
import { MarketplaceMeteringResolvedConfiguration } from "../MarketplaceMeteringConfiguration";
export * from "../types/MeterUsageInput";
export * from "../types/MeterUsageOutput";
export * from "../types/MeterUsageExceptionsUnion";

export class MeterUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MeterUsageInput,
      OutputTypesUnion,
      MeterUsageOutput,
      MarketplaceMeteringResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MeterUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MeterUsageInput,
    MeterUsageOutput,
    _stream.Readable
  >();

  constructor(readonly input: MeterUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MarketplaceMeteringResolvedConfiguration
  ): __aws_sdk_types.Handler<MeterUsageInput, MeterUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MeterUsageInput, MeterUsageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
