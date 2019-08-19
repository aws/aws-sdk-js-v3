import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSchemas } from "../model/operations/ListSchemas";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSchemasInput } from "../types/ListSchemasInput";
import { ListSchemasOutput } from "../types/ListSchemasOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListSchemasInput";
export * from "../types/ListSchemasOutput";
export * from "../types/ListSchemasExceptionsUnion";

export class ListSchemasCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSchemasInput,
      OutputTypesUnion,
      ListSchemasOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = ListSchemas;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSchemasInput,
    ListSchemasOutput,
    Blob
  >();

  constructor(readonly input: ListSchemasInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSchemasInput, ListSchemasOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSchemasInput, ListSchemasOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
