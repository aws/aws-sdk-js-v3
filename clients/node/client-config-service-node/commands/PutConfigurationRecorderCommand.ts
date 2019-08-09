import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutConfigurationRecorder } from "../model/PutConfigurationRecorder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationRecorderInput } from "../types/PutConfigurationRecorderInput";
import { PutConfigurationRecorderOutput } from "../types/PutConfigurationRecorderOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutConfigurationRecorderInput";
export * from "../types/PutConfigurationRecorderOutput";
export * from "../types/PutConfigurationRecorderExceptionsUnion";

export class PutConfigurationRecorderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationRecorderInput,
      OutputTypesUnion,
      PutConfigurationRecorderOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutConfigurationRecorder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationRecorderInput,
    PutConfigurationRecorderOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutConfigurationRecorderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationRecorderInput,
    PutConfigurationRecorderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutConfigurationRecorderInput, PutConfigurationRecorderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
