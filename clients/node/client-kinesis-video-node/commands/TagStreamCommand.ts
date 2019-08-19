import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { TagStream } from "../model/operations/TagStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { TagStreamInput } from "../types/TagStreamInput";
import { TagStreamOutput } from "../types/TagStreamOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/TagStreamInput";
export * from "../types/TagStreamOutput";
export * from "../types/TagStreamExceptionsUnion";

export class TagStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      TagStreamInput,
      OutputTypesUnion,
      TagStreamOutput,
      KinesisVideoResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = TagStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    TagStreamInput,
    TagStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: TagStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<TagStreamInput, TagStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<TagStreamInput, TagStreamOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
