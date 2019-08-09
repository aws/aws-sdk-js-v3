import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ApplyPendingMaintenanceAction } from "../model/ApplyPendingMaintenanceAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplyPendingMaintenanceActionInput } from "../types/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "../types/ApplyPendingMaintenanceActionOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
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
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ApplyPendingMaintenanceAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplyPendingMaintenanceActionInput,
    ApplyPendingMaintenanceActionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ApplyPendingMaintenanceActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
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
