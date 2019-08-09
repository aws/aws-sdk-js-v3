import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInventoryEntries } from "../model/ListInventoryEntries";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInventoryEntriesInput } from "../types/ListInventoryEntriesInput";
import { ListInventoryEntriesOutput } from "../types/ListInventoryEntriesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListInventoryEntriesInput";
export * from "../types/ListInventoryEntriesOutput";
export * from "../types/ListInventoryEntriesExceptionsUnion";

export class ListInventoryEntriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInventoryEntriesInput,
      OutputTypesUnion,
      ListInventoryEntriesOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListInventoryEntries;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInventoryEntriesInput,
    ListInventoryEntriesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListInventoryEntriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInventoryEntriesInput,
    ListInventoryEntriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListInventoryEntriesInput, ListInventoryEntriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
