import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateClusterConfiguration } from "../model/UpdateClusterConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateClusterConfigurationInput } from "../types/UpdateClusterConfigurationInput";
import { UpdateClusterConfigurationOutput } from "../types/UpdateClusterConfigurationOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/UpdateClusterConfigurationInput";
export * from "../types/UpdateClusterConfigurationOutput";
export * from "../types/UpdateClusterConfigurationExceptionsUnion";

export class UpdateClusterConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateClusterConfigurationInput,
      OutputTypesUnion,
      UpdateClusterConfigurationOutput,
      KafkaResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateClusterConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateClusterConfigurationInput,
    UpdateClusterConfigurationOutput,
    Blob
  >();

  constructor(readonly input: UpdateClusterConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateClusterConfigurationInput,
    UpdateClusterConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateClusterConfigurationInput,
        UpdateClusterConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
