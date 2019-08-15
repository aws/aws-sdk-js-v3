import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddApplicationInputProcessingConfiguration } from "../model/operations/AddApplicationInputProcessingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationInputProcessingConfigurationInput } from "../types/AddApplicationInputProcessingConfigurationInput";
import { AddApplicationInputProcessingConfigurationOutput } from "../types/AddApplicationInputProcessingConfigurationOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/AddApplicationInputProcessingConfigurationInput";
export * from "../types/AddApplicationInputProcessingConfigurationOutput";
export * from "../types/AddApplicationInputProcessingConfigurationExceptionsUnion";

export class AddApplicationInputProcessingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddApplicationInputProcessingConfigurationInput,
      OutputTypesUnion,
      AddApplicationInputProcessingConfigurationOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = AddApplicationInputProcessingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationInputProcessingConfigurationInput,
    AddApplicationInputProcessingConfigurationOutput,
    Blob
  >();

  constructor(
    readonly input: AddApplicationInputProcessingConfigurationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddApplicationInputProcessingConfigurationInput,
    AddApplicationInputProcessingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddApplicationInputProcessingConfigurationInput,
        AddApplicationInputProcessingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
