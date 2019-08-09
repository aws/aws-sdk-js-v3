import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PurchaseReservedNodeOffering } from "../model/PurchaseReservedNodeOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseReservedNodeOfferingInput } from "../types/PurchaseReservedNodeOfferingInput";
import { PurchaseReservedNodeOfferingOutput } from "../types/PurchaseReservedNodeOfferingOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/PurchaseReservedNodeOfferingInput";
export * from "../types/PurchaseReservedNodeOfferingOutput";
export * from "../types/PurchaseReservedNodeOfferingExceptionsUnion";

export class PurchaseReservedNodeOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseReservedNodeOfferingInput,
      OutputTypesUnion,
      PurchaseReservedNodeOfferingOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PurchaseReservedNodeOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseReservedNodeOfferingInput,
    PurchaseReservedNodeOfferingOutput,
    _stream.Readable
  >();

  constructor(readonly input: PurchaseReservedNodeOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseReservedNodeOfferingInput,
    PurchaseReservedNodeOfferingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseReservedNodeOfferingInput,
        PurchaseReservedNodeOfferingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
