import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBuiltinSlotTypes } from "../model/operations/GetBuiltinSlotTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBuiltinSlotTypesInput } from "../types/GetBuiltinSlotTypesInput";
import { GetBuiltinSlotTypesOutput } from "../types/GetBuiltinSlotTypesOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBuiltinSlotTypesInput";
export * from "../types/GetBuiltinSlotTypesOutput";
export * from "../types/GetBuiltinSlotTypesExceptionsUnion";

export class GetBuiltinSlotTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBuiltinSlotTypesInput,
      OutputTypesUnion,
      GetBuiltinSlotTypesOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = GetBuiltinSlotTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBuiltinSlotTypesInput,
    GetBuiltinSlotTypesOutput,
    Blob
  >();

  constructor(readonly input: GetBuiltinSlotTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBuiltinSlotTypesInput,
    GetBuiltinSlotTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBuiltinSlotTypesInput, GetBuiltinSlotTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
