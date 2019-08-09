import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListChannels } from "../model/ListChannels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListChannelsInput } from "../types/ListChannelsInput";
import { ListChannelsOutput } from "../types/ListChannelsOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/ListChannelsInput";
export * from "../types/ListChannelsOutput";
export * from "../types/ListChannelsExceptionsUnion";

export class ListChannelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListChannelsInput,
      OutputTypesUnion,
      ListChannelsOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListChannels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListChannelsInput,
    ListChannelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListChannelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<ListChannelsInput, ListChannelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListChannelsInput, ListChannelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
