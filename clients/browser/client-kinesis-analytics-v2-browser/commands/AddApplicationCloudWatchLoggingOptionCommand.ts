import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddApplicationCloudWatchLoggingOption } from "../model/operations/AddApplicationCloudWatchLoggingOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddApplicationCloudWatchLoggingOptionInput } from "../types/AddApplicationCloudWatchLoggingOptionInput";
import { AddApplicationCloudWatchLoggingOptionOutput } from "../types/AddApplicationCloudWatchLoggingOptionOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/AddApplicationCloudWatchLoggingOptionInput";
export * from "../types/AddApplicationCloudWatchLoggingOptionOutput";
export * from "../types/AddApplicationCloudWatchLoggingOptionExceptionsUnion";

export class AddApplicationCloudWatchLoggingOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddApplicationCloudWatchLoggingOptionInput,
      OutputTypesUnion,
      AddApplicationCloudWatchLoggingOptionOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = AddApplicationCloudWatchLoggingOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddApplicationCloudWatchLoggingOptionInput,
    AddApplicationCloudWatchLoggingOptionOutput,
    Blob
  >();

  constructor(readonly input: AddApplicationCloudWatchLoggingOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddApplicationCloudWatchLoggingOptionInput,
    AddApplicationCloudWatchLoggingOptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AddApplicationCloudWatchLoggingOptionInput,
        AddApplicationCloudWatchLoggingOptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
