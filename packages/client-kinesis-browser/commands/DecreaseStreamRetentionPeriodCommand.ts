import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DecreaseStreamRetentionPeriod } from "../model/DecreaseStreamRetentionPeriod";
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
      Blob
    > {
  readonly model = DecreaseStreamRetentionPeriod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecreaseStreamRetentionPeriodInput,
    DecreaseStreamRetentionPeriodOutput,
    Blob
  >();

  constructor(readonly input: DecreaseStreamRetentionPeriodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
