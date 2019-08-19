import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListItems } from "../model/operations/ListItems";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListItemsInput } from "../types/ListItemsInput";
import { ListItemsOutput } from "../types/ListItemsOutput";
import { MediaStoreDataResolvedConfiguration } from "../MediaStoreDataConfiguration";
export * from "../types/ListItemsInput";
export * from "../types/ListItemsOutput";
export * from "../types/ListItemsExceptionsUnion";

export class ListItemsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListItemsInput,
      OutputTypesUnion,
      ListItemsOutput,
      MediaStoreDataResolvedConfiguration,
      Blob
    > {
  readonly model = ListItems;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListItemsInput,
    ListItemsOutput,
    Blob
  >();

  constructor(readonly input: ListItemsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ListItemsInput, ListItemsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListItemsInput, ListItemsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
