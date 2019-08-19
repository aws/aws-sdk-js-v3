import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTopics } from "../model/operations/ListTopics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTopicsInput } from "../types/ListTopicsInput";
import { ListTopicsOutput } from "../types/ListTopicsOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListTopicsInput";
export * from "../types/ListTopicsOutput";
export * from "../types/ListTopicsExceptionsUnion";

export class ListTopicsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTopicsInput,
      OutputTypesUnion,
      ListTopicsOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTopics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTopicsInput,
    ListTopicsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTopicsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTopicsInput, ListTopicsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTopicsInput, ListTopicsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
