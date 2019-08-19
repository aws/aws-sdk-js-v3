import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListStreamConsumers } from "../model/operations/ListStreamConsumers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListStreamConsumersInput } from "../types/ListStreamConsumersInput";
import { ListStreamConsumersOutput } from "../types/ListStreamConsumersOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/ListStreamConsumersInput";
export * from "../types/ListStreamConsumersOutput";
export * from "../types/ListStreamConsumersExceptionsUnion";

export class ListStreamConsumersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListStreamConsumersInput,
      OutputTypesUnion,
      ListStreamConsumersOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListStreamConsumers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListStreamConsumersInput,
    ListStreamConsumersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListStreamConsumersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListStreamConsumersInput,
    ListStreamConsumersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListStreamConsumersInput, ListStreamConsumersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
