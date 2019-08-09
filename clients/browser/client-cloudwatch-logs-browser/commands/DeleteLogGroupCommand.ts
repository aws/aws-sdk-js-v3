import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLogGroup } from "../model/DeleteLogGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLogGroupInput } from "../types/DeleteLogGroupInput";
import { DeleteLogGroupOutput } from "../types/DeleteLogGroupOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteLogGroupInput";
export * from "../types/DeleteLogGroupOutput";
export * from "../types/DeleteLogGroupExceptionsUnion";

export class DeleteLogGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLogGroupInput,
      OutputTypesUnion,
      DeleteLogGroupOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteLogGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLogGroupInput,
    DeleteLogGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteLogGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteLogGroupInput, DeleteLogGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLogGroupInput, DeleteLogGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
