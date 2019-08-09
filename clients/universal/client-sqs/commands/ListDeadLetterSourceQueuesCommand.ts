import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDeadLetterSourceQueues } from "../model/ListDeadLetterSourceQueues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDeadLetterSourceQueuesInput } from "../types/ListDeadLetterSourceQueuesInput";
import { ListDeadLetterSourceQueuesOutput } from "../types/ListDeadLetterSourceQueuesOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/ListDeadLetterSourceQueuesInput";
export * from "../types/ListDeadLetterSourceQueuesOutput";
export * from "../types/ListDeadLetterSourceQueuesExceptionsUnion";

export class ListDeadLetterSourceQueuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDeadLetterSourceQueuesInput,
      OutputTypesUnion,
      ListDeadLetterSourceQueuesOutput,
      SQSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDeadLetterSourceQueues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDeadLetterSourceQueuesInput,
    ListDeadLetterSourceQueuesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDeadLetterSourceQueuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDeadLetterSourceQueuesInput,
    ListDeadLetterSourceQueuesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDeadLetterSourceQueuesInput,
        ListDeadLetterSourceQueuesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
