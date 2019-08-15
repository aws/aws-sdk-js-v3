import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDirectories } from "../model/operations/ListDirectories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDirectoriesInput } from "../types/ListDirectoriesInput";
import { ListDirectoriesOutput } from "../types/ListDirectoriesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListDirectoriesInput";
export * from "../types/ListDirectoriesOutput";
export * from "../types/ListDirectoriesExceptionsUnion";

export class ListDirectoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDirectoriesInput,
      OutputTypesUnion,
      ListDirectoriesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListDirectories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDirectoriesInput,
    ListDirectoriesOutput,
    Blob
  >();

  constructor(readonly input: ListDirectoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDirectoriesInput, ListDirectoriesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDirectoriesInput, ListDirectoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
