import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationInputProcessingConfiguration } from "../model/DeleteApplicationInputProcessingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationInputProcessingConfigurationInput } from "../types/DeleteApplicationInputProcessingConfigurationInput";
import { DeleteApplicationInputProcessingConfigurationOutput } from "../types/DeleteApplicationInputProcessingConfigurationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/DeleteApplicationInputProcessingConfigurationInput";
export * from "../types/DeleteApplicationInputProcessingConfigurationOutput";
export * from "../types/DeleteApplicationInputProcessingConfigurationExceptionsUnion";

export class DeleteApplicationInputProcessingConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationInputProcessingConfigurationInput,
      OutputTypesUnion,
      DeleteApplicationInputProcessingConfigurationOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteApplicationInputProcessingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationInputProcessingConfigurationInput,
    DeleteApplicationInputProcessingConfigurationOutput,
    Uint8Array
  >();

  constructor(
    readonly input: DeleteApplicationInputProcessingConfigurationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationInputProcessingConfigurationInput,
    DeleteApplicationInputProcessingConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteApplicationInputProcessingConfigurationInput,
        DeleteApplicationInputProcessingConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
