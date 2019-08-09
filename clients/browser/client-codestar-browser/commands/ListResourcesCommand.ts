import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResources } from "../model/ListResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourcesInput } from "../types/ListResourcesInput";
import { ListResourcesOutput } from "../types/ListResourcesOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/ListResourcesInput";
export * from "../types/ListResourcesOutput";
export * from "../types/ListResourcesExceptionsUnion";

export class ListResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourcesInput,
      OutputTypesUnion,
      ListResourcesOutput,
      CodeStarResolvedConfiguration,
      Blob
    > {
  readonly model = ListResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourcesInput,
    ListResourcesOutput,
    Blob
  >();

  constructor(readonly input: ListResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<ListResourcesInput, ListResourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourcesInput, ListResourcesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
