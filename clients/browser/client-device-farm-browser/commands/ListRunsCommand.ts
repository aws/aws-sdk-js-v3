import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRuns } from "../model/ListRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRunsInput } from "../types/ListRunsInput";
import { ListRunsOutput } from "../types/ListRunsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListRunsInput";
export * from "../types/ListRunsOutput";
export * from "../types/ListRunsExceptionsUnion";

export class ListRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRunsInput,
      OutputTypesUnion,
      ListRunsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRunsInput,
    ListRunsOutput,
    Blob
  >();

  constructor(readonly input: ListRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRunsInput, ListRunsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRunsInput, ListRunsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
