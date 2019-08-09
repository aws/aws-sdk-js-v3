import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePlaybackConfiguration } from "../model/DeletePlaybackConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePlaybackConfigurationInput } from "../types/DeletePlaybackConfigurationInput";
import { DeletePlaybackConfigurationOutput } from "../types/DeletePlaybackConfigurationOutput";
import { MediaTailorResolvedConfiguration } from "../MediaTailorConfiguration";
export * from "../types/DeletePlaybackConfigurationInput";
export * from "../types/DeletePlaybackConfigurationOutput";
export * from "../types/DeletePlaybackConfigurationExceptionsUnion";

export class DeletePlaybackConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePlaybackConfigurationInput,
      OutputTypesUnion,
      DeletePlaybackConfigurationOutput,
      MediaTailorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeletePlaybackConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePlaybackConfigurationInput,
    DeletePlaybackConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeletePlaybackConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaTailorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePlaybackConfigurationInput,
    DeletePlaybackConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeletePlaybackConfigurationInput,
        DeletePlaybackConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
