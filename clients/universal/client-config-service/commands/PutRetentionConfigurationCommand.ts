import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRetentionConfiguration } from "../model/PutRetentionConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRetentionConfigurationInput } from "../types/PutRetentionConfigurationInput";
import { PutRetentionConfigurationOutput } from "../types/PutRetentionConfigurationOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutRetentionConfigurationInput";
export * from "../types/PutRetentionConfigurationOutput";
export * from "../types/PutRetentionConfigurationExceptionsUnion";

export class PutRetentionConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRetentionConfigurationInput,
      OutputTypesUnion,
      PutRetentionConfigurationOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutRetentionConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRetentionConfigurationInput,
    PutRetentionConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: PutRetentionConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutRetentionConfigurationInput,
    PutRetentionConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRetentionConfigurationInput, PutRetentionConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
