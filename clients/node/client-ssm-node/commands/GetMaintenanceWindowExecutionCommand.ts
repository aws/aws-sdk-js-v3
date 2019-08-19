import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMaintenanceWindowExecution } from "../model/operations/GetMaintenanceWindowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowExecutionInput } from "../types/GetMaintenanceWindowExecutionInput";
import { GetMaintenanceWindowExecutionOutput } from "../types/GetMaintenanceWindowExecutionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowExecutionInput";
export * from "../types/GetMaintenanceWindowExecutionOutput";
export * from "../types/GetMaintenanceWindowExecutionExceptionsUnion";

export class GetMaintenanceWindowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowExecutionInput,
      OutputTypesUnion,
      GetMaintenanceWindowExecutionOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMaintenanceWindowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowExecutionInput,
    GetMaintenanceWindowExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMaintenanceWindowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowExecutionInput,
    GetMaintenanceWindowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetMaintenanceWindowExecutionInput,
        GetMaintenanceWindowExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
