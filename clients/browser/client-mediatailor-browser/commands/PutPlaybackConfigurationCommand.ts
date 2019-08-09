import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPlaybackConfiguration } from "../model/PutPlaybackConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPlaybackConfigurationInput } from "../types/PutPlaybackConfigurationInput";
import { PutPlaybackConfigurationOutput } from "../types/PutPlaybackConfigurationOutput";
import { MediaTailorResolvedConfiguration } from "../MediaTailorConfiguration";
export * from "../types/PutPlaybackConfigurationInput";
export * from "../types/PutPlaybackConfigurationOutput";
export * from "../types/PutPlaybackConfigurationExceptionsUnion";

export class PutPlaybackConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPlaybackConfigurationInput,
      OutputTypesUnion,
      PutPlaybackConfigurationOutput,
      MediaTailorResolvedConfiguration,
      Blob
    > {
  readonly model = PutPlaybackConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPlaybackConfigurationInput,
    PutPlaybackConfigurationOutput,
    Blob
  >();

  constructor(readonly input: PutPlaybackConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaTailorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutPlaybackConfigurationInput,
    PutPlaybackConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPlaybackConfigurationInput, PutPlaybackConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
