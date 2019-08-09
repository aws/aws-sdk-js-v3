import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConfigurationSetReputationMetricsEnabled } from "../model/UpdateConfigurationSetReputationMetricsEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationSetReputationMetricsEnabledInput } from "../types/UpdateConfigurationSetReputationMetricsEnabledInput";
import { UpdateConfigurationSetReputationMetricsEnabledOutput } from "../types/UpdateConfigurationSetReputationMetricsEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateConfigurationSetReputationMetricsEnabledInput";
export * from "../types/UpdateConfigurationSetReputationMetricsEnabledOutput";
export * from "../types/UpdateConfigurationSetReputationMetricsEnabledExceptionsUnion";

export class UpdateConfigurationSetReputationMetricsEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationSetReputationMetricsEnabledInput,
      OutputTypesUnion,
      UpdateConfigurationSetReputationMetricsEnabledOutput,
      SESResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateConfigurationSetReputationMetricsEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationSetReputationMetricsEnabledInput,
    UpdateConfigurationSetReputationMetricsEnabledOutput,
    Uint8Array
  >();

  constructor(
    readonly input: UpdateConfigurationSetReputationMetricsEnabledInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationSetReputationMetricsEnabledInput,
    UpdateConfigurationSetReputationMetricsEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConfigurationSetReputationMetricsEnabledInput,
        UpdateConfigurationSetReputationMetricsEnabledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
