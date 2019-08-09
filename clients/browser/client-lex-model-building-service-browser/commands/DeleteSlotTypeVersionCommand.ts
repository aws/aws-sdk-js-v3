import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSlotTypeVersion } from "../model/DeleteSlotTypeVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSlotTypeVersionInput } from "../types/DeleteSlotTypeVersionInput";
import { DeleteSlotTypeVersionOutput } from "../types/DeleteSlotTypeVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteSlotTypeVersionInput";
export * from "../types/DeleteSlotTypeVersionOutput";
export * from "../types/DeleteSlotTypeVersionExceptionsUnion";

export class DeleteSlotTypeVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSlotTypeVersionInput,
      OutputTypesUnion,
      DeleteSlotTypeVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteSlotTypeVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSlotTypeVersionInput,
    DeleteSlotTypeVersionOutput,
    Blob
  >();

  constructor(readonly input: DeleteSlotTypeVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSlotTypeVersionInput,
    DeleteSlotTypeVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSlotTypeVersionInput, DeleteSlotTypeVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
