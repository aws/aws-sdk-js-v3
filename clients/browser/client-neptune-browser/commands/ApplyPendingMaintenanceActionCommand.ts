import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ApplyPendingMaintenanceAction } from "../model/operations/ApplyPendingMaintenanceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplyPendingMaintenanceActionInput } from "../types/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "../types/ApplyPendingMaintenanceActionOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/ApplyPendingMaintenanceActionInput";
export * from "../types/ApplyPendingMaintenanceActionOutput";
export * from "../types/ApplyPendingMaintenanceActionExceptionsUnion";

export class ApplyPendingMaintenanceActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApplyPendingMaintenanceActionInput,
      OutputTypesUnion,
      ApplyPendingMaintenanceActionOutput,
      NeptuneResolvedConfiguration,
      Blob
    > {
  readonly model = ApplyPendingMaintenanceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplyPendingMaintenanceActionInput,
    ApplyPendingMaintenanceActionOutput,
    Blob
  >();

  constructor(readonly input: ApplyPendingMaintenanceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ApplyPendingMaintenanceActionInput,
    ApplyPendingMaintenanceActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ApplyPendingMaintenanceActionInput,
        ApplyPendingMaintenanceActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
