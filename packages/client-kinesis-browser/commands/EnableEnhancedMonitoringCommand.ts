import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableEnhancedMonitoring } from "../model/EnableEnhancedMonitoring";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableEnhancedMonitoringInput } from "../types/EnableEnhancedMonitoringInput";
import { EnableEnhancedMonitoringOutput } from "../types/EnableEnhancedMonitoringOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/EnableEnhancedMonitoringInput";
export * from "../types/EnableEnhancedMonitoringOutput";
export * from "../types/EnableEnhancedMonitoringExceptionsUnion";

export class EnableEnhancedMonitoringCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableEnhancedMonitoringInput,
      OutputTypesUnion,
      EnableEnhancedMonitoringOutput,
      KinesisResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableEnhancedMonitoringInput,
    EnableEnhancedMonitoringOutput,
    Blob
  >();

  constructor(readonly input: EnableEnhancedMonitoringInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    EnableEnhancedMonitoringInput,
    EnableEnhancedMonitoringOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: EnableEnhancedMonitoring
    };

    return stack.resolve(
      handler<EnableEnhancedMonitoringInput, EnableEnhancedMonitoringOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
