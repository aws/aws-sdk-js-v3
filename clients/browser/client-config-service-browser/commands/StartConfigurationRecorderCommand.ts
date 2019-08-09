import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartConfigurationRecorder } from "../model/StartConfigurationRecorder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartConfigurationRecorderInput } from "../types/StartConfigurationRecorderInput";
import { StartConfigurationRecorderOutput } from "../types/StartConfigurationRecorderOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/StartConfigurationRecorderInput";
export * from "../types/StartConfigurationRecorderOutput";
export * from "../types/StartConfigurationRecorderExceptionsUnion";

export class StartConfigurationRecorderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartConfigurationRecorderInput,
      OutputTypesUnion,
      StartConfigurationRecorderOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = StartConfigurationRecorder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartConfigurationRecorderInput,
    StartConfigurationRecorderOutput,
    Blob
  >();

  constructor(readonly input: StartConfigurationRecorderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartConfigurationRecorderInput,
    StartConfigurationRecorderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartConfigurationRecorderInput,
        StartConfigurationRecorderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
