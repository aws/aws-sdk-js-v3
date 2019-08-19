import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteInventory } from "../model/operations/DeleteInventory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteInventoryInput } from "../types/DeleteInventoryInput";
import { DeleteInventoryOutput } from "../types/DeleteInventoryOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteInventoryInput";
export * from "../types/DeleteInventoryOutput";
export * from "../types/DeleteInventoryExceptionsUnion";

export class DeleteInventoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteInventoryInput,
      OutputTypesUnion,
      DeleteInventoryOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteInventory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteInventoryInput,
    DeleteInventoryOutput,
    Blob
  >();

  constructor(readonly input: DeleteInventoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteInventoryInput, DeleteInventoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteInventoryInput, DeleteInventoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
