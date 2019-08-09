import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPlaybackConfigurations } from "../model/ListPlaybackConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPlaybackConfigurationsInput } from "../types/ListPlaybackConfigurationsInput";
import { ListPlaybackConfigurationsOutput } from "../types/ListPlaybackConfigurationsOutput";
import { MediaTailorResolvedConfiguration } from "../MediaTailorConfiguration";
export * from "../types/ListPlaybackConfigurationsInput";
export * from "../types/ListPlaybackConfigurationsOutput";
export * from "../types/ListPlaybackConfigurationsExceptionsUnion";

export class ListPlaybackConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPlaybackConfigurationsInput,
      OutputTypesUnion,
      ListPlaybackConfigurationsOutput,
      MediaTailorResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListPlaybackConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPlaybackConfigurationsInput,
    ListPlaybackConfigurationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListPlaybackConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaTailorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPlaybackConfigurationsInput,
    ListPlaybackConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListPlaybackConfigurationsInput,
        ListPlaybackConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
