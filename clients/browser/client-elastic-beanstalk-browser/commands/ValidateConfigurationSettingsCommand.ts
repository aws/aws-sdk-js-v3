import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ValidateConfigurationSettings } from "../model/operations/ValidateConfigurationSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ValidateConfigurationSettingsInput } from "../types/ValidateConfigurationSettingsInput";
import { ValidateConfigurationSettingsOutput } from "../types/ValidateConfigurationSettingsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/ValidateConfigurationSettingsInput";
export * from "../types/ValidateConfigurationSettingsOutput";
export * from "../types/ValidateConfigurationSettingsExceptionsUnion";

export class ValidateConfigurationSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ValidateConfigurationSettingsInput,
      OutputTypesUnion,
      ValidateConfigurationSettingsOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = ValidateConfigurationSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ValidateConfigurationSettingsInput,
    ValidateConfigurationSettingsOutput,
    Blob
  >();

  constructor(readonly input: ValidateConfigurationSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ValidateConfigurationSettingsInput,
    ValidateConfigurationSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ValidateConfigurationSettingsInput,
        ValidateConfigurationSettingsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
