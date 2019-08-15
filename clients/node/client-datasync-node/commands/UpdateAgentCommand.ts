import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAgent } from "../model/operations/UpdateAgent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAgentInput } from "../types/UpdateAgentInput";
import { UpdateAgentOutput } from "../types/UpdateAgentOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/UpdateAgentInput";
export * from "../types/UpdateAgentOutput";
export * from "../types/UpdateAgentExceptionsUnion";

export class UpdateAgentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAgentInput,
      OutputTypesUnion,
      UpdateAgentOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAgent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAgentInput,
    UpdateAgentOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAgentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAgentInput, UpdateAgentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAgentInput, UpdateAgentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
