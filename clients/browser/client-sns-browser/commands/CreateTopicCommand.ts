import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTopic } from "../model/operations/CreateTopic";
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
      Blob
    > {
  readonly model = CreateTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTopicInput,
    CreateTopicOutput,
    Blob
  >();

  constructor(readonly input: CreateTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
