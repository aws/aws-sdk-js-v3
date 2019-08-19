import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DecreaseStreamRetentionPeriod } from "../model/operations/DecreaseStreamRetentionPeriod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DecreaseStreamRetentionPeriodInput } from "../types/DecreaseStreamRetentionPeriodInput";
import { DecreaseStreamRetentionPeriodOutput } from "../types/DecreaseStreamRetentionPeriodOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/DecreaseStreamRetentionPeriodInput";
export * from "../types/DecreaseStreamRetentionPeriodOutput";
export * from "../types/DecreaseStreamRetentionPeriodExceptionsUnion";

export class DecreaseStreamRetentionPeriodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DecreaseStreamRetentionPeriodInput,
      OutputTypesUnion,
      DecreaseStreamRetentionPeriodOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DecreaseStreamRetentionPeriod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecreaseStreamRetentionPeriodInput,
    DecreaseStreamRetentionPeriodOutput,
    _stream.Readable
  >();

  constructor(readonly input: DecreaseStreamRetentionPeriodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DecreaseStreamRetentionPeriodInput,
    DecreaseStreamRetentionPeriodOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DecreaseStreamRetentionPeriodInput,
        DecreaseStreamRetentionPeriodOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
