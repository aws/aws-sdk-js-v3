import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationCloudWatchLoggingOption } from "../model/DeleteApplicationCloudWatchLoggingOption";
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
      Uint8Array
    > {
  readonly model = DeleteApplicationCloudWatchLoggingOption;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationCloudWatchLoggingOptionInput,
    DeleteApplicationCloudWatchLoggingOptionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteApplicationCloudWatchLoggingOptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
