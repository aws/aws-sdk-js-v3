import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAgent } from "../model/CreateAgent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAgentInput } from "../types/CreateAgentInput";
import { CreateAgentOutput } from "../types/CreateAgentOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateAgentInput";
export * from "../types/CreateAgentOutput";
export * from "../types/CreateAgentExceptionsUnion";

export class CreateAgentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAgentInput,
      OutputTypesUnion,
      CreateAgentOutput,
      DataSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAgent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAgentInput,
    CreateAgentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAgentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAgentInput, CreateAgentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAgentInput, CreateAgentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
