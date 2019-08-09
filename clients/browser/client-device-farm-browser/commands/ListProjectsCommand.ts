import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProjects } from "../model/ListProjects";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProjectsInput } from "../types/ListProjectsInput";
import { ListProjectsOutput } from "../types/ListProjectsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListProjectsInput";
export * from "../types/ListProjectsOutput";
export * from "../types/ListProjectsExceptionsUnion";

export class ListProjectsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProjectsInput,
      OutputTypesUnion,
      ListProjectsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListProjects;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProjectsInput,
    ListProjectsOutput,
    Blob
  >();

  constructor(readonly input: ListProjectsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListProjectsInput, ListProjectsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProjectsInput, ListProjectsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
