import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFlowLogs } from "../model/operations/CreateFlowLogs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFlowLogsInput } from "../types/CreateFlowLogsInput";
import { CreateFlowLogsOutput } from "../types/CreateFlowLogsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateFlowLogsInput";
export * from "../types/CreateFlowLogsOutput";
export * from "../types/CreateFlowLogsExceptionsUnion";

export class CreateFlowLogsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFlowLogsInput,
      OutputTypesUnion,
      CreateFlowLogsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateFlowLogs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFlowLogsInput,
    CreateFlowLogsOutput,
    Blob
  >();

  constructor(readonly input: CreateFlowLogsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFlowLogsInput, CreateFlowLogsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFlowLogsInput, CreateFlowLogsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
