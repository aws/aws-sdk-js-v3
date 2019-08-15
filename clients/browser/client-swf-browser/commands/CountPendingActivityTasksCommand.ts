import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CountPendingActivityTasks } from "../model/operations/CountPendingActivityTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CountPendingActivityTasksInput } from "../types/CountPendingActivityTasksInput";
import { CountPendingActivityTasksOutput } from "../types/CountPendingActivityTasksOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/CountPendingActivityTasksInput";
export * from "../types/CountPendingActivityTasksOutput";
export * from "../types/CountPendingActivityTasksExceptionsUnion";

export class CountPendingActivityTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CountPendingActivityTasksInput,
      OutputTypesUnion,
      CountPendingActivityTasksOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = CountPendingActivityTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CountPendingActivityTasksInput,
    CountPendingActivityTasksOutput,
    Blob
  >();

  constructor(readonly input: CountPendingActivityTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CountPendingActivityTasksInput,
    CountPendingActivityTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CountPendingActivityTasksInput, CountPendingActivityTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
