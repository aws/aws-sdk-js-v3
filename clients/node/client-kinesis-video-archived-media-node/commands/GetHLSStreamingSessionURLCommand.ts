import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetHLSStreamingSessionURL } from "../model/GetHLSStreamingSessionURL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetHLSStreamingSessionURLInput } from "../types/GetHLSStreamingSessionURLInput";
import { GetHLSStreamingSessionURLOutput } from "../types/GetHLSStreamingSessionURLOutput";
import { KinesisVideoArchivedMediaResolvedConfiguration } from "../KinesisVideoArchivedMediaConfiguration";
export * from "../types/GetHLSStreamingSessionURLInput";
export * from "../types/GetHLSStreamingSessionURLOutput";
export * from "../types/GetHLSStreamingSessionURLExceptionsUnion";

export class GetHLSStreamingSessionURLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetHLSStreamingSessionURLInput,
      OutputTypesUnion,
      GetHLSStreamingSessionURLOutput,
      KinesisVideoArchivedMediaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetHLSStreamingSessionURL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetHLSStreamingSessionURLInput,
    GetHLSStreamingSessionURLOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetHLSStreamingSessionURLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoArchivedMediaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetHLSStreamingSessionURLInput,
    GetHLSStreamingSessionURLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetHLSStreamingSessionURLInput, GetHLSStreamingSessionURLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
