import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PurchaseOffering } from "../model/PurchaseOffering";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseOfferingInput } from "../types/PurchaseOfferingInput";
import { PurchaseOfferingOutput } from "../types/PurchaseOfferingOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/PurchaseOfferingInput";
export * from "../types/PurchaseOfferingOutput";
export * from "../types/PurchaseOfferingExceptionsUnion";

export class PurchaseOfferingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseOfferingInput,
      OutputTypesUnion,
      PurchaseOfferingOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = PurchaseOffering;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseOfferingInput,
    PurchaseOfferingOutput,
    Blob
  >();

  constructor(readonly input: PurchaseOfferingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<PurchaseOfferingInput, PurchaseOfferingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PurchaseOfferingInput, PurchaseOfferingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
