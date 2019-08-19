import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceCapacityReservationAttributes } from "../model/operations/ModifyInstanceCapacityReservationAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceCapacityReservationAttributesInput } from "../types/ModifyInstanceCapacityReservationAttributesInput";
import { ModifyInstanceCapacityReservationAttributesOutput } from "../types/ModifyInstanceCapacityReservationAttributesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyInstanceCapacityReservationAttributesInput";
export * from "../types/ModifyInstanceCapacityReservationAttributesOutput";
export * from "../types/ModifyInstanceCapacityReservationAttributesExceptionsUnion";

export class ModifyInstanceCapacityReservationAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceCapacityReservationAttributesInput,
      OutputTypesUnion,
      ModifyInstanceCapacityReservationAttributesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyInstanceCapacityReservationAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceCapacityReservationAttributesInput,
    ModifyInstanceCapacityReservationAttributesOutput,
    Blob
  >();

  constructor(
    readonly input: ModifyInstanceCapacityReservationAttributesInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceCapacityReservationAttributesInput,
    ModifyInstanceCapacityReservationAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyInstanceCapacityReservationAttributesInput,
        ModifyInstanceCapacityReservationAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
