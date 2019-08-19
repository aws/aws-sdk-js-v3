import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLoggingConfiguration } from "../model/operations/PutLoggingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLoggingConfigurationInput } from "../types/PutLoggingConfigurationInput";
import { PutLoggingConfigurationOutput } from "../types/PutLoggingConfigurationOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/PutLoggingConfigurationInput";
export * from "../types/PutLoggingConfigurationOutput";
export * from "../types/PutLoggingConfigurationExceptionsUnion";

export class PutLoggingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLoggingConfigurationInput,
      OutputTypesUnion,
      PutLoggingConfigurationOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = PutLoggingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLoggingConfigurationInput,
    PutLoggingConfigurationOutput,
    Blob
  >();

  constructor(readonly input: PutLoggingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutLoggingConfigurationInput,
    PutLoggingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLoggingConfigurationInput, PutLoggingConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
