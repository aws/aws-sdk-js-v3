import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLoggingConfiguration } from "../model/GetLoggingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoggingConfigurationInput } from "../types/GetLoggingConfigurationInput";
import { GetLoggingConfigurationOutput } from "../types/GetLoggingConfigurationOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetLoggingConfigurationInput";
export * from "../types/GetLoggingConfigurationOutput";
export * from "../types/GetLoggingConfigurationExceptionsUnion";

export class GetLoggingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoggingConfigurationInput,
      OutputTypesUnion,
      GetLoggingConfigurationOutput,
      WAFResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLoggingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoggingConfigurationInput,
    GetLoggingConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLoggingConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLoggingConfigurationInput,
    GetLoggingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLoggingConfigurationInput, GetLoggingConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
