import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPlaybackConfiguration } from "../model/GetPlaybackConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPlaybackConfigurationInput } from "../types/GetPlaybackConfigurationInput";
import { GetPlaybackConfigurationOutput } from "../types/GetPlaybackConfigurationOutput";
import { MediaTailorResolvedConfiguration } from "../MediaTailorConfiguration";
export * from "../types/GetPlaybackConfigurationInput";
export * from "../types/GetPlaybackConfigurationOutput";
export * from "../types/GetPlaybackConfigurationExceptionsUnion";

export class GetPlaybackConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPlaybackConfigurationInput,
      OutputTypesUnion,
      GetPlaybackConfigurationOutput,
      MediaTailorResolvedConfiguration,
      Blob
    > {
  readonly model = GetPlaybackConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPlaybackConfigurationInput,
    GetPlaybackConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetPlaybackConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaTailorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPlaybackConfigurationInput,
    GetPlaybackConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPlaybackConfigurationInput, GetPlaybackConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
