import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListApplicationVersions } from "../model/ListApplicationVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationVersionsInput } from "../types/ListApplicationVersionsInput";
import { ListApplicationVersionsOutput } from "../types/ListApplicationVersionsOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/ListApplicationVersionsInput";
export * from "../types/ListApplicationVersionsOutput";
export * from "../types/ListApplicationVersionsExceptionsUnion";

export class ListApplicationVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationVersionsInput,
      OutputTypesUnion,
      ListApplicationVersionsOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListApplicationVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationVersionsInput,
    ListApplicationVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListApplicationVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListApplicationVersionsInput,
    ListApplicationVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListApplicationVersionsInput, ListApplicationVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
