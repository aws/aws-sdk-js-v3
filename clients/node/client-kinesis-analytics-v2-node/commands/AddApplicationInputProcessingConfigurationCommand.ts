import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddApplicationInputProcessingConfiguration } from "../model/operations/AddApplicationInputProcessingConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationInputProcessingConfigurationInput } from "../types/AddApplicationInputProcessingConfigurationInput";
import { AddApplicationInputProcessingConfigurationOutput } from "../types/AddApplicationInputProcessingConfigurationOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
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
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddApplicationInputProcessingConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationInputProcessingConfigurationInput,
    AddApplicationInputProcessingConfigurationOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: AddApplicationInputProcessingConfigurationInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
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
