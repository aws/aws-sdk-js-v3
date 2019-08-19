import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMedia } from "../model/operations/GetMedia";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMediaInput } from "../types/GetMediaInput";
import { GetMediaOutput } from "../types/GetMediaOutput";
import { KinesisVideoMediaResolvedConfiguration } from "../KinesisVideoMediaConfiguration";
export * from "../types/GetMediaInput";
export * from "../types/GetMediaOutput";
export * from "../types/GetMediaExceptionsUnion";

export class GetMediaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMediaInput,
      OutputTypesUnion,
      GetMediaOutput,
      KinesisVideoMediaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMedia;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMediaInput,
    GetMediaOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMediaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoMediaResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMediaInput, GetMediaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMediaInput, GetMediaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
