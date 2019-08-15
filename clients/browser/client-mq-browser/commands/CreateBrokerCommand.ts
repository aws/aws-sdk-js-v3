import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBroker } from "../model/operations/CreateBroker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBrokerInput } from "../types/CreateBrokerInput";
import { CreateBrokerOutput } from "../types/CreateBrokerOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/CreateBrokerInput";
export * from "../types/CreateBrokerOutput";
export * from "../types/CreateBrokerExceptionsUnion";

export class CreateBrokerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBrokerInput,
      OutputTypesUnion,
      CreateBrokerOutput,
      mqResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBrokerInput,
    CreateBrokerOutput,
    Blob
  >();

  constructor(readonly input: CreateBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBrokerInput, CreateBrokerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBrokerInput, CreateBrokerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
