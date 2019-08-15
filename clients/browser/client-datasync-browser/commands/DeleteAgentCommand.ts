import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAgent } from "../model/operations/DeleteAgent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAgentInput } from "../types/DeleteAgentInput";
import { DeleteAgentOutput } from "../types/DeleteAgentOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DeleteAgentInput";
export * from "../types/DeleteAgentOutput";
export * from "../types/DeleteAgentExceptionsUnion";

export class DeleteAgentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAgentInput,
      OutputTypesUnion,
      DeleteAgentOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAgent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAgentInput,
    DeleteAgentOutput,
    Blob
  >();

  constructor(readonly input: DeleteAgentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAgentInput, DeleteAgentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAgentInput, DeleteAgentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
