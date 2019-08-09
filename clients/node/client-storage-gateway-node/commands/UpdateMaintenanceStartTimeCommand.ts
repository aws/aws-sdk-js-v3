import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateMaintenanceStartTime } from "../model/UpdateMaintenanceStartTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMaintenanceStartTimeInput } from "../types/UpdateMaintenanceStartTimeInput";
import { UpdateMaintenanceStartTimeOutput } from "../types/UpdateMaintenanceStartTimeOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/UpdateMaintenanceStartTimeInput";
export * from "../types/UpdateMaintenanceStartTimeOutput";
export * from "../types/UpdateMaintenanceStartTimeExceptionsUnion";

export class UpdateMaintenanceStartTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMaintenanceStartTimeInput,
      OutputTypesUnion,
      UpdateMaintenanceStartTimeOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateMaintenanceStartTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMaintenanceStartTimeInput,
    UpdateMaintenanceStartTimeOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateMaintenanceStartTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMaintenanceStartTimeInput,
    UpdateMaintenanceStartTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateMaintenanceStartTimeInput,
        UpdateMaintenanceStartTimeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
