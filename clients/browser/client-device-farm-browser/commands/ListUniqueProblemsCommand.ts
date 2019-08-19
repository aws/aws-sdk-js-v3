import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListUniqueProblems } from "../model/operations/ListUniqueProblems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUniqueProblemsInput } from "../types/ListUniqueProblemsInput";
import { ListUniqueProblemsOutput } from "../types/ListUniqueProblemsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListUniqueProblemsInput";
export * from "../types/ListUniqueProblemsOutput";
export * from "../types/ListUniqueProblemsExceptionsUnion";

export class ListUniqueProblemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUniqueProblemsInput,
      OutputTypesUnion,
      ListUniqueProblemsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListUniqueProblems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUniqueProblemsInput,
    ListUniqueProblemsOutput,
    Blob
  >();

  constructor(readonly input: ListUniqueProblemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListUniqueProblemsInput,
    ListUniqueProblemsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUniqueProblemsInput, ListUniqueProblemsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
