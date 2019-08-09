import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTopicAttributes } from "../model/GetTopicAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTopicAttributesInput } from "../types/GetTopicAttributesInput";
import { GetTopicAttributesOutput } from "../types/GetTopicAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/GetTopicAttributesInput";
export * from "../types/GetTopicAttributesOutput";
export * from "../types/GetTopicAttributesExceptionsUnion";

export class GetTopicAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTopicAttributesInput,
      OutputTypesUnion,
      GetTopicAttributesOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTopicAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTopicAttributesInput,
    GetTopicAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTopicAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTopicAttributesInput,
    GetTopicAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTopicAttributesInput, GetTopicAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
