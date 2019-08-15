import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurchaseReservedDBInstancesOffering } from "../model/operations/PurchaseReservedDBInstancesOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseReservedDBInstancesOfferingInput } from "../types/PurchaseReservedDBInstancesOfferingInput";
import { PurchaseReservedDBInstancesOfferingOutput } from "../types/PurchaseReservedDBInstancesOfferingOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/PurchaseReservedDBInstancesOfferingInput";
export * from "../types/PurchaseReservedDBInstancesOfferingOutput";
export * from "../types/PurchaseReservedDBInstancesOfferingExceptionsUnion";

export class PurchaseReservedDBInstancesOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseReservedDBInstancesOfferingInput,
      OutputTypesUnion,
      PurchaseReservedDBInstancesOfferingOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PurchaseReservedDBInstancesOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseReservedDBInstancesOfferingInput,
    PurchaseReservedDBInstancesOfferingOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurchaseReservedDBInstancesOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseReservedDBInstancesOfferingInput,
    PurchaseReservedDBInstancesOfferingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseReservedDBInstancesOfferingInput,
        PurchaseReservedDBInstancesOfferingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
