import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFlowLogs } from "../model/DeleteFlowLogs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFlowLogsInput } from "../types/DeleteFlowLogsInput";
import { DeleteFlowLogsOutput } from "../types/DeleteFlowLogsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteFlowLogsInput";
export * from "../types/DeleteFlowLogsOutput";
export * from "../types/DeleteFlowLogsExceptionsUnion";

export class DeleteFlowLogsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFlowLogsInput,
      OutputTypesUnion,
      DeleteFlowLogsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFlowLogs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFlowLogsInput,
    DeleteFlowLogsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFlowLogsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFlowLogsInput, DeleteFlowLogsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFlowLogsInput, DeleteFlowLogsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
