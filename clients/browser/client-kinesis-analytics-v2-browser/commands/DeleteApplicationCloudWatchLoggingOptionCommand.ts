import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationCloudWatchLoggingOption } from "../model/operations/DeleteApplicationCloudWatchLoggingOption";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationCloudWatchLoggingOptionInput } from "../types/DeleteApplicationCloudWatchLoggingOptionInput";
import { DeleteApplicationCloudWatchLoggingOptionOutput } from "../types/DeleteApplicationCloudWatchLoggingOptionOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
export * from "../types/DeleteApplicationCloudWatchLoggingOptionInput";
export * from "../types/DeleteApplicationCloudWatchLoggingOptionOutput";
export * from "../types/DeleteApplicationCloudWatchLoggingOptionExceptionsUnion";

export class DeleteApplicationCloudWatchLoggingOptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationCloudWatchLoggingOptionInput,
      OutputTypesUnion,
      DeleteApplicationCloudWatchLoggingOptionOutput,
      KinesisAnalyticsV2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApplicationCloudWatchLoggingOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationCloudWatchLoggingOptionInput,
    DeleteApplicationCloudWatchLoggingOptionOutput,
    Blob
  >();

  constructor(readonly input: DeleteApplicationCloudWatchLoggingOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationCloudWatchLoggingOptionInput,
    DeleteApplicationCloudWatchLoggingOptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteApplicationCloudWatchLoggingOptionInput,
        DeleteApplicationCloudWatchLoggingOptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
