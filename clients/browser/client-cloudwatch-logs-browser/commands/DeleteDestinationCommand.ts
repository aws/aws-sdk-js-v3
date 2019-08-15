import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDestination } from "../model/operations/DeleteDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDestinationInput } from "../types/DeleteDestinationInput";
import { DeleteDestinationOutput } from "../types/DeleteDestinationOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteDestinationInput";
export * from "../types/DeleteDestinationOutput";
export * from "../types/DeleteDestinationExceptionsUnion";

export class DeleteDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDestinationInput,
      OutputTypesUnion,
      DeleteDestinationOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDestinationInput,
    DeleteDestinationOutput,
    Blob
  >();

  constructor(readonly input: DeleteDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDestinationInput, DeleteDestinationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDestinationInput, DeleteDestinationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
