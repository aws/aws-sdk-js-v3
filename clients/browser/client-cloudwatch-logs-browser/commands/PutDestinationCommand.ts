import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutDestination } from "../model/PutDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDestinationInput } from "../types/PutDestinationInput";
import { PutDestinationOutput } from "../types/PutDestinationOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutDestinationInput";
export * from "../types/PutDestinationOutput";
export * from "../types/PutDestinationExceptionsUnion";

export class PutDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDestinationInput,
      OutputTypesUnion,
      PutDestinationOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = PutDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDestinationInput,
    PutDestinationOutput,
    Blob
  >();

  constructor(readonly input: PutDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutDestinationInput, PutDestinationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutDestinationInput, PutDestinationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
