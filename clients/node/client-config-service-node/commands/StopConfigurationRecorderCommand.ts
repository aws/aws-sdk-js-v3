import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopConfigurationRecorder } from "../model/operations/StopConfigurationRecorder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopConfigurationRecorderInput } from "../types/StopConfigurationRecorderInput";
import { StopConfigurationRecorderOutput } from "../types/StopConfigurationRecorderOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/StopConfigurationRecorderInput";
export * from "../types/StopConfigurationRecorderOutput";
export * from "../types/StopConfigurationRecorderExceptionsUnion";

export class StopConfigurationRecorderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopConfigurationRecorderInput,
      OutputTypesUnion,
      StopConfigurationRecorderOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopConfigurationRecorder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopConfigurationRecorderInput,
    StopConfigurationRecorderOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopConfigurationRecorderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopConfigurationRecorderInput,
    StopConfigurationRecorderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopConfigurationRecorderInput, StopConfigurationRecorderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
