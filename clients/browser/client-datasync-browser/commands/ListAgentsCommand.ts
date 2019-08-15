import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAgents } from "../model/operations/ListAgents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAgentsInput } from "../types/ListAgentsInput";
import { ListAgentsOutput } from "../types/ListAgentsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/ListAgentsInput";
export * from "../types/ListAgentsOutput";
export * from "../types/ListAgentsExceptionsUnion";

export class ListAgentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAgentsInput,
      OutputTypesUnion,
      ListAgentsOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = ListAgents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAgentsInput,
    ListAgentsOutput,
    Blob
  >();

  constructor(readonly input: ListAgentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAgentsInput, ListAgentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAgentsInput, ListAgentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
