import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterTaskFromMaintenanceWindow } from "../model/operations/DeregisterTaskFromMaintenanceWindow";
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
      _stream.Readable
    > {
  readonly model = DeregisterTaskFromMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTaskFromMaintenanceWindowInput,
    DeregisterTaskFromMaintenanceWindowOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterTaskFromMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
