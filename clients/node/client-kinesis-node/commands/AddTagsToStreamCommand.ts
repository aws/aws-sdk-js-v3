import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddTagsToStream } from "../model/operations/AddTagsToStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddTagsToStreamInput } from "../types/AddTagsToStreamInput";
import { AddTagsToStreamOutput } from "../types/AddTagsToStreamOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/AddTagsToStreamInput";
export * from "../types/AddTagsToStreamOutput";
export * from "../types/AddTagsToStreamExceptionsUnion";

export class AddTagsToStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddTagsToStreamInput,
      OutputTypesUnion,
      AddTagsToStreamOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddTagsToStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddTagsToStreamInput,
    AddTagsToStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddTagsToStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<AddTagsToStreamInput, AddTagsToStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddTagsToStreamInput, AddTagsToStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
