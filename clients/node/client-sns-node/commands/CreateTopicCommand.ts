import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTopic } from "../model/CreateTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTopicInput } from "../types/CreateTopicInput";
import { CreateTopicOutput } from "../types/CreateTopicOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/CreateTopicInput";
export * from "../types/CreateTopicOutput";
export * from "../types/CreateTopicExceptionsUnion";

export class CreateTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTopicInput,
      OutputTypesUnion,
      CreateTopicOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTopicInput,
    CreateTopicOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTopicInput, CreateTopicOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTopicInput, CreateTopicOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
