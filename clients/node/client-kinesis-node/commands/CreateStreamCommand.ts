import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateStream } from "../model/operations/CreateStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStreamInput } from "../types/CreateStreamInput";
import { CreateStreamOutput } from "../types/CreateStreamOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/CreateStreamInput";
export * from "../types/CreateStreamOutput";
export * from "../types/CreateStreamExceptionsUnion";

export class CreateStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStreamInput,
      OutputTypesUnion,
      CreateStreamOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStreamInput,
    CreateStreamOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateStreamInput, CreateStreamOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStreamInput, CreateStreamOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
