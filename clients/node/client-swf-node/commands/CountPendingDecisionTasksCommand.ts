import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CountPendingDecisionTasks } from "../model/operations/CountPendingDecisionTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CountPendingDecisionTasksInput } from "../types/CountPendingDecisionTasksInput";
import { CountPendingDecisionTasksOutput } from "../types/CountPendingDecisionTasksOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/CountPendingDecisionTasksInput";
export * from "../types/CountPendingDecisionTasksOutput";
export * from "../types/CountPendingDecisionTasksExceptionsUnion";

export class CountPendingDecisionTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CountPendingDecisionTasksInput,
      OutputTypesUnion,
      CountPendingDecisionTasksOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CountPendingDecisionTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CountPendingDecisionTasksInput,
    CountPendingDecisionTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: CountPendingDecisionTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CountPendingDecisionTasksInput,
    CountPendingDecisionTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CountPendingDecisionTasksInput, CountPendingDecisionTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
