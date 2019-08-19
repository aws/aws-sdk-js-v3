import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UntagStream } from "../model/operations/UntagStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagStreamInput } from "../types/UntagStreamInput";
import { UntagStreamOutput } from "../types/UntagStreamOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/UntagStreamInput";
export * from "../types/UntagStreamOutput";
export * from "../types/UntagStreamExceptionsUnion";

export class UntagStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagStreamInput,
      OutputTypesUnion,
      UntagStreamOutput,
      KinesisVideoResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UntagStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagStreamInput,
    UntagStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: UntagStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagStreamInput, UntagStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagStreamInput, UntagStreamOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
