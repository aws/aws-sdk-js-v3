import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePendingMaintenanceActions } from "../model/DescribePendingMaintenanceActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePendingMaintenanceActionsInput } from "../types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "../types/DescribePendingMaintenanceActionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribePendingMaintenanceActionsInput";
export * from "../types/DescribePendingMaintenanceActionsOutput";
export * from "../types/DescribePendingMaintenanceActionsExceptionsUnion";

export class DescribePendingMaintenanceActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePendingMaintenanceActionsInput,
      OutputTypesUnion,
      DescribePendingMaintenanceActionsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribePendingMaintenanceActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePendingMaintenanceActionsInput,
    DescribePendingMaintenanceActionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribePendingMaintenanceActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePendingMaintenanceActionsInput,
    DescribePendingMaintenanceActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePendingMaintenanceActionsInput,
        DescribePendingMaintenanceActionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
