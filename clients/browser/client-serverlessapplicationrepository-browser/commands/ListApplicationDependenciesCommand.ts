import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListApplicationDependencies } from "../model/operations/ListApplicationDependencies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListApplicationDependenciesInput } from "../types/ListApplicationDependenciesInput";
import { ListApplicationDependenciesOutput } from "../types/ListApplicationDependenciesOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/ListApplicationDependenciesInput";
export * from "../types/ListApplicationDependenciesOutput";
export * from "../types/ListApplicationDependenciesExceptionsUnion";

export class ListApplicationDependenciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListApplicationDependenciesInput,
      OutputTypesUnion,
      ListApplicationDependenciesOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListApplicationDependencies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListApplicationDependenciesInput,
    ListApplicationDependenciesOutput,
    Blob
  >();

  constructor(readonly input: ListApplicationDependenciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListApplicationDependenciesInput,
    ListApplicationDependenciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListApplicationDependenciesInput,
        ListApplicationDependenciesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
