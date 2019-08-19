import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutInventory } from "../model/operations/PutInventory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutInventoryInput } from "../types/PutInventoryInput";
import { PutInventoryOutput } from "../types/PutInventoryOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/PutInventoryInput";
export * from "../types/PutInventoryOutput";
export * from "../types/PutInventoryExceptionsUnion";

export class PutInventoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutInventoryInput,
      OutputTypesUnion,
      PutInventoryOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = PutInventory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutInventoryInput,
    PutInventoryOutput,
    Blob
  >();

  constructor(readonly input: PutInventoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<PutInventoryInput, PutInventoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutInventoryInput, PutInventoryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
