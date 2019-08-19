import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBrokerStorage } from "../model/operations/UpdateBrokerStorage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBrokerStorageInput } from "../types/UpdateBrokerStorageInput";
import { UpdateBrokerStorageOutput } from "../types/UpdateBrokerStorageOutput";
import { KafkaResolvedConfiguration } from "../KafkaConfiguration";
export * from "../types/UpdateBrokerStorageInput";
export * from "../types/UpdateBrokerStorageOutput";
export * from "../types/UpdateBrokerStorageExceptionsUnion";

export class UpdateBrokerStorageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBrokerStorageInput,
      OutputTypesUnion,
      UpdateBrokerStorageOutput,
      KafkaResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBrokerStorage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBrokerStorageInput,
    UpdateBrokerStorageOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBrokerStorageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KafkaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateBrokerStorageInput,
    UpdateBrokerStorageOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBrokerStorageInput, UpdateBrokerStorageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
