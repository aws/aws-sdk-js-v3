import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetTopicAttributes } from "../model/operations/SetTopicAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetTopicAttributesInput } from "../types/SetTopicAttributesInput";
import { SetTopicAttributesOutput } from "../types/SetTopicAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SetTopicAttributesInput";
export * from "../types/SetTopicAttributesOutput";
export * from "../types/SetTopicAttributesExceptionsUnion";

export class SetTopicAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetTopicAttributesInput,
      OutputTypesUnion,
      SetTopicAttributesOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetTopicAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTopicAttributesInput,
    SetTopicAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetTopicAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetTopicAttributesInput,
    SetTopicAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetTopicAttributesInput, SetTopicAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
