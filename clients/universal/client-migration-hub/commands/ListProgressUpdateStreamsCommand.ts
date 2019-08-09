import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProgressUpdateStreams } from "../model/ListProgressUpdateStreams";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProgressUpdateStreamsInput } from "../types/ListProgressUpdateStreamsInput";
import { ListProgressUpdateStreamsOutput } from "../types/ListProgressUpdateStreamsOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/ListProgressUpdateStreamsInput";
export * from "../types/ListProgressUpdateStreamsOutput";
export * from "../types/ListProgressUpdateStreamsExceptionsUnion";

export class ListProgressUpdateStreamsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProgressUpdateStreamsInput,
      OutputTypesUnion,
      ListProgressUpdateStreamsOutput,
      MigrationHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListProgressUpdateStreams;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProgressUpdateStreamsInput,
    ListProgressUpdateStreamsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListProgressUpdateStreamsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProgressUpdateStreamsInput,
    ListProgressUpdateStreamsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProgressUpdateStreamsInput, ListProgressUpdateStreamsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
