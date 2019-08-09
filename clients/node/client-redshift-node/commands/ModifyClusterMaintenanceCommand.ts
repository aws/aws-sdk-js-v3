import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyClusterMaintenance } from "../model/ModifyClusterMaintenance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterMaintenanceInput } from "../types/ModifyClusterMaintenanceInput";
import { ModifyClusterMaintenanceOutput } from "../types/ModifyClusterMaintenanceOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterMaintenanceInput";
export * from "../types/ModifyClusterMaintenanceOutput";
export * from "../types/ModifyClusterMaintenanceExceptionsUnion";

export class ModifyClusterMaintenanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterMaintenanceInput,
      OutputTypesUnion,
      ModifyClusterMaintenanceOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyClusterMaintenance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterMaintenanceInput,
    ModifyClusterMaintenanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterMaintenanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterMaintenanceInput,
    ModifyClusterMaintenanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterMaintenanceInput, ModifyClusterMaintenanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
