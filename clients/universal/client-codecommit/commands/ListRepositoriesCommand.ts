import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRepositories } from "../model/ListRepositories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRepositoriesInput } from "../types/ListRepositoriesInput";
import { ListRepositoriesOutput } from "../types/ListRepositoriesOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/ListRepositoriesInput";
export * from "../types/ListRepositoriesOutput";
export * from "../types/ListRepositoriesExceptionsUnion";

export class ListRepositoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRepositoriesInput,
      OutputTypesUnion,
      ListRepositoriesOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListRepositories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRepositoriesInput,
    ListRepositoriesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListRepositoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRepositoriesInput, ListRepositoriesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRepositoriesInput, ListRepositoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
