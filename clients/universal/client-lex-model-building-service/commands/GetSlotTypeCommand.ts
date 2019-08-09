import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSlotType } from "../model/GetSlotType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSlotTypeInput } from "../types/GetSlotTypeInput";
import { GetSlotTypeOutput } from "../types/GetSlotTypeOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetSlotTypeInput";
export * from "../types/GetSlotTypeOutput";
export * from "../types/GetSlotTypeExceptionsUnion";

export class GetSlotTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSlotTypeInput,
      OutputTypesUnion,
      GetSlotTypeOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetSlotType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSlotTypeInput,
    GetSlotTypeOutput,
    Uint8Array
  >();

  constructor(readonly input: GetSlotTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSlotTypeInput, GetSlotTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSlotTypeInput, GetSlotTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
