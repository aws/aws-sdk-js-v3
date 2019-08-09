import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PurchaseProvisionedCapacity } from "../model/PurchaseProvisionedCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseProvisionedCapacityInput } from "../types/PurchaseProvisionedCapacityInput";
import { PurchaseProvisionedCapacityOutput } from "../types/PurchaseProvisionedCapacityOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/PurchaseProvisionedCapacityInput";
export * from "../types/PurchaseProvisionedCapacityOutput";
export * from "../types/PurchaseProvisionedCapacityExceptionsUnion";

export class PurchaseProvisionedCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseProvisionedCapacityInput,
      OutputTypesUnion,
      PurchaseProvisionedCapacityOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = PurchaseProvisionedCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseProvisionedCapacityInput,
    PurchaseProvisionedCapacityOutput,
    Blob
  >();

  constructor(readonly input: PurchaseProvisionedCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseProvisionedCapacityInput,
    PurchaseProvisionedCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseProvisionedCapacityInput,
        PurchaseProvisionedCapacityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
