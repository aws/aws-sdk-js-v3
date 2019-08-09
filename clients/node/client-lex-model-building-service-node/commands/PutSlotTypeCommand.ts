import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutSlotType } from "../model/PutSlotType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSlotTypeInput } from "../types/PutSlotTypeInput";
import { PutSlotTypeOutput } from "../types/PutSlotTypeOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/PutSlotTypeInput";
export * from "../types/PutSlotTypeOutput";
export * from "../types/PutSlotTypeExceptionsUnion";

export class PutSlotTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSlotTypeInput,
      OutputTypesUnion,
      PutSlotTypeOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutSlotType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSlotTypeInput,
    PutSlotTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutSlotTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutSlotTypeInput, PutSlotTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSlotTypeInput, PutSlotTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
