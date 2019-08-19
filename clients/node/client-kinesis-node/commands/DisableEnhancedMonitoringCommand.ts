import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableEnhancedMonitoring } from "../model/operations/DisableEnhancedMonitoring";
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
      _stream.Readable
    > {
  readonly model = DisableEnhancedMonitoring;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableEnhancedMonitoringInput,
    DisableEnhancedMonitoringOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableEnhancedMonitoringInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
      model: this.model
    };

    return stack.resolve(
      handler<DisableEnhancedMonitoringInput, DisableEnhancedMonitoringOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
