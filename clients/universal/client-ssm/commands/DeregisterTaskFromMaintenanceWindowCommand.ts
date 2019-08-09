import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterTaskFromMaintenanceWindow } from "../model/DeregisterTaskFromMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterTaskFromMaintenanceWindowInput } from "../types/DeregisterTaskFromMaintenanceWindowInput";
import { DeregisterTaskFromMaintenanceWindowOutput } from "../types/DeregisterTaskFromMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeregisterTaskFromMaintenanceWindowInput";
export * from "../types/DeregisterTaskFromMaintenanceWindowOutput";
export * from "../types/DeregisterTaskFromMaintenanceWindowExceptionsUnion";

export class DeregisterTaskFromMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterTaskFromMaintenanceWindowInput,
      OutputTypesUnion,
      DeregisterTaskFromMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterTaskFromMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTaskFromMaintenanceWindowInput,
    DeregisterTaskFromMaintenanceWindowOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterTaskFromMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterTaskFromMaintenanceWindowInput,
    DeregisterTaskFromMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterTaskFromMaintenanceWindowInput,
        DeregisterTaskFromMaintenanceWindowOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
