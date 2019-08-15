import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSlotType } from "../model/operations/DeleteSlotType";
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
      _stream.Readable
    > {
  readonly model = DeleteSlotType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSlotTypeInput,
    DeleteSlotTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSlotTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
