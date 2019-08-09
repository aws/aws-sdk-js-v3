import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSolutionVersions } from "../model/ListSolutionVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSolutionVersionsInput } from "../types/ListSolutionVersionsInput";
import { ListSolutionVersionsOutput } from "../types/ListSolutionVersionsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListSolutionVersionsInput";
export * from "../types/ListSolutionVersionsOutput";
export * from "../types/ListSolutionVersionsExceptionsUnion";

export class ListSolutionVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSolutionVersionsInput,
      OutputTypesUnion,
      ListSolutionVersionsOutput,
      PersonalizeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSolutionVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSolutionVersionsInput,
    ListSolutionVersionsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSolutionVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSolutionVersionsInput,
    ListSolutionVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSolutionVersionsInput, ListSolutionVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
