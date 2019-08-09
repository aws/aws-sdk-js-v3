import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteBroker } from "../model/DeleteBroker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBrokerInput } from "../types/DeleteBrokerInput";
import { DeleteBrokerOutput } from "../types/DeleteBrokerOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/DeleteBrokerInput";
export * from "../types/DeleteBrokerOutput";
export * from "../types/DeleteBrokerExceptionsUnion";

export class DeleteBrokerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBrokerInput,
      OutputTypesUnion,
      DeleteBrokerOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBrokerInput,
    DeleteBrokerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBrokerInput, DeleteBrokerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBrokerInput, DeleteBrokerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
