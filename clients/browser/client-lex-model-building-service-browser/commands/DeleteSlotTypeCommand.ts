import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSlotType } from "../model/DeleteSlotType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSlotTypeInput } from "../types/DeleteSlotTypeInput";
import { DeleteSlotTypeOutput } from "../types/DeleteSlotTypeOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteSlotTypeInput";
export * from "../types/DeleteSlotTypeOutput";
export * from "../types/DeleteSlotTypeExceptionsUnion";

export class DeleteSlotTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSlotTypeInput,
      OutputTypesUnion,
      DeleteSlotTypeOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSlotType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSlotTypeInput,
    DeleteSlotTypeOutput,
    Blob
  >();

  constructor(readonly input: DeleteSlotTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSlotTypeInput, DeleteSlotTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSlotTypeInput, DeleteSlotTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
