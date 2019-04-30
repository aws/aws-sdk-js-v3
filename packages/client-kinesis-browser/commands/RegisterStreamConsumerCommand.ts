import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterStreamConsumer } from "../model/RegisterStreamConsumer";
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
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterStreamConsumerInput,
    RegisterStreamConsumerOutput,
    Blob
  >();

  constructor(readonly input: RegisterStreamConsumerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
      model: RegisterStreamConsumer
    };

    return stack.resolve(
      handler<RegisterStreamConsumerInput, RegisterStreamConsumerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
