import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PurchaseScheduledInstances } from "../model/PurchaseScheduledInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PurchaseScheduledInstancesInput } from "../types/PurchaseScheduledInstancesInput";
import { PurchaseScheduledInstancesOutput } from "../types/PurchaseScheduledInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/PurchaseScheduledInstancesInput";
export * from "../types/PurchaseScheduledInstancesOutput";
export * from "../types/PurchaseScheduledInstancesExceptionsUnion";

export class PurchaseScheduledInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PurchaseScheduledInstancesInput,
      OutputTypesUnion,
      PurchaseScheduledInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = PurchaseScheduledInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PurchaseScheduledInstancesInput,
    PurchaseScheduledInstancesOutput,
    Blob
  >();

  constructor(readonly input: PurchaseScheduledInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PurchaseScheduledInstancesInput,
    PurchaseScheduledInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PurchaseScheduledInstancesInput,
        PurchaseScheduledInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
