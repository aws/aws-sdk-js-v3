import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { IncreaseStreamRetentionPeriod } from "../model/operations/IncreaseStreamRetentionPeriod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IncreaseStreamRetentionPeriodInput } from "../types/IncreaseStreamRetentionPeriodInput";
import { IncreaseStreamRetentionPeriodOutput } from "../types/IncreaseStreamRetentionPeriodOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/IncreaseStreamRetentionPeriodInput";
export * from "../types/IncreaseStreamRetentionPeriodOutput";
export * from "../types/IncreaseStreamRetentionPeriodExceptionsUnion";

export class IncreaseStreamRetentionPeriodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IncreaseStreamRetentionPeriodInput,
      OutputTypesUnion,
      IncreaseStreamRetentionPeriodOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = IncreaseStreamRetentionPeriod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IncreaseStreamRetentionPeriodInput,
    IncreaseStreamRetentionPeriodOutput,
    _stream.Readable
  >();

  constructor(readonly input: IncreaseStreamRetentionPeriodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    IncreaseStreamRetentionPeriodInput,
    IncreaseStreamRetentionPeriodOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        IncreaseStreamRetentionPeriodInput,
        IncreaseStreamRetentionPeriodOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
