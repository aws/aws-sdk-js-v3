import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListResourceInventory } from "../model/operations/ListResourceInventory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceInventoryInput } from "../types/ListResourceInventoryInput";
import { ListResourceInventoryOutput } from "../types/ListResourceInventoryOutput";
import { LicenseManagerResolvedConfiguration } from "../LicenseManagerConfiguration";
export * from "../types/ListResourceInventoryInput";
export * from "../types/ListResourceInventoryOutput";
export * from "../types/ListResourceInventoryExceptionsUnion";

export class ListResourceInventoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceInventoryInput,
      OutputTypesUnion,
      ListResourceInventoryOutput,
      LicenseManagerResolvedConfiguration,
      Blob
    > {
  readonly model = ListResourceInventory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceInventoryInput,
    ListResourceInventoryOutput,
    Blob
  >();

  constructor(readonly input: ListResourceInventoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LicenseManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceInventoryInput,
    ListResourceInventoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourceInventoryInput, ListResourceInventoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
