import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCreatedArtifacts } from "../model/operations/ListCreatedArtifacts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCreatedArtifactsInput } from "../types/ListCreatedArtifactsInput";
import { ListCreatedArtifactsOutput } from "../types/ListCreatedArtifactsOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/ListCreatedArtifactsInput";
export * from "../types/ListCreatedArtifactsOutput";
export * from "../types/ListCreatedArtifactsExceptionsUnion";

export class ListCreatedArtifactsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCreatedArtifactsInput,
      OutputTypesUnion,
      ListCreatedArtifactsOutput,
      MigrationHubResolvedConfiguration,
      Blob
    > {
  readonly model = ListCreatedArtifacts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCreatedArtifactsInput,
    ListCreatedArtifactsOutput,
    Blob
  >();

  constructor(readonly input: ListCreatedArtifactsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCreatedArtifactsInput,
    ListCreatedArtifactsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCreatedArtifactsInput, ListCreatedArtifactsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
