import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterStreamConsumer } from "../model/operations/RegisterStreamConsumer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterStreamConsumerInput } from "../types/RegisterStreamConsumerInput";
import { RegisterStreamConsumerOutput } from "../types/RegisterStreamConsumerOutput";
import { KinesisResolvedConfiguration } from "../KinesisConfiguration";
export * from "../types/RegisterStreamConsumerInput";
export * from "../types/RegisterStreamConsumerOutput";
export * from "../types/RegisterStreamConsumerExceptionsUnion";

export class RegisterStreamConsumerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterStreamConsumerInput,
      OutputTypesUnion,
      RegisterStreamConsumerOutput,
      KinesisResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterStreamConsumer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterStreamConsumerInput,
    RegisterStreamConsumerOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterStreamConsumerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterStreamConsumerInput,
    RegisterStreamConsumerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterStreamConsumerInput, RegisterStreamConsumerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
