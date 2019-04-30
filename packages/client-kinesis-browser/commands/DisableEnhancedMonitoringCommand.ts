import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableEnhancedMonitoring } from "../model/DisableEnhancedMonitoring";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableEnhancedMonitoringInput } from "../types/DisableEnhancedMonitoringInput";
import { DisableEnhancedMonitoringOutput } from "../types/DisableEnhancedMonitoringOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/DisableEnhancedMonitoringInput";
export * from "../types/DisableEnhancedMonitoringOutput";
export * from "../types/DisableEnhancedMonitoringExceptionsUnion";

export class DisableEnhancedMonitoringCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableEnhancedMonitoringInput,
      OutputTypesUnion,
      DisableEnhancedMonitoringOutput,
      KinesisResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableEnhancedMonitoringInput,
    DisableEnhancedMonitoringOutput,
    Blob
  >();

  constructor(readonly input: DisableEnhancedMonitoringInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableEnhancedMonitoringInput,
    DisableEnhancedMonitoringOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DisableEnhancedMonitoring
    };

    return stack.resolve(
      handler<DisableEnhancedMonitoringInput, DisableEnhancedMonitoringOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
