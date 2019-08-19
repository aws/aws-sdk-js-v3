import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterStreamConsumer } from "../model/operations/DeregisterStreamConsumer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterStreamConsumerInput } from "../types/DeregisterStreamConsumerInput";
import { DeregisterStreamConsumerOutput } from "../types/DeregisterStreamConsumerOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/DeregisterStreamConsumerInput";
export * from "../types/DeregisterStreamConsumerOutput";
export * from "../types/DeregisterStreamConsumerExceptionsUnion";

export class DeregisterStreamConsumerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterStreamConsumerInput,
      OutputTypesUnion,
      DeregisterStreamConsumerOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterStreamConsumer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterStreamConsumerInput,
    DeregisterStreamConsumerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterStreamConsumerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterStreamConsumerInput,
    DeregisterStreamConsumerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterStreamConsumerInput, DeregisterStreamConsumerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
