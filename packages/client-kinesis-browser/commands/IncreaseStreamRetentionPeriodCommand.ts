import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IncreaseStreamRetentionPeriod } from "../model/IncreaseStreamRetentionPeriod";
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
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IncreaseStreamRetentionPeriodInput,
    IncreaseStreamRetentionPeriodOutput,
    Blob
  >();

  constructor(readonly input: IncreaseStreamRetentionPeriodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
      model: IncreaseStreamRetentionPeriod
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
