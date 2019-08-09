import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTopics } from "../model/ListTopics";
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
      Uint8Array
    > {
  readonly model = ListTopics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTopicsInput,
    ListTopicsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTopicsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
