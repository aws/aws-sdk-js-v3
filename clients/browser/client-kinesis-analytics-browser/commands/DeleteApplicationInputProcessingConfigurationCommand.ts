import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationInputProcessingConfiguration } from "../model/operations/DeleteApplicationInputProcessingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationInputProcessingConfigurationInput } from "../types/DeleteApplicationInputProcessingConfigurationInput";
import { DeleteApplicationInputProcessingConfigurationOutput } from "../types/DeleteApplicationInputProcessingConfigurationOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
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
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApplicationInputProcessingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationInputProcessingConfigurationInput,
    DeleteApplicationInputProcessingConfigurationOutput,
    Blob
  >();

  constructor(
    readonly input: DeleteApplicationInputProcessingConfigurationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
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
