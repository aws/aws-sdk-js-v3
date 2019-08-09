import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMaintenanceWindowTask } from "../model/GetMaintenanceWindowTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowTaskInput } from "../types/GetMaintenanceWindowTaskInput";
import { GetMaintenanceWindowTaskOutput } from "../types/GetMaintenanceWindowTaskOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowTaskInput";
export * from "../types/GetMaintenanceWindowTaskOutput";
export * from "../types/GetMaintenanceWindowTaskExceptionsUnion";

export class GetMaintenanceWindowTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowTaskInput,
      OutputTypesUnion,
      GetMaintenanceWindowTaskOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMaintenanceWindowTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowTaskInput,
    GetMaintenanceWindowTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMaintenanceWindowTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowTaskInput,
    GetMaintenanceWindowTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMaintenanceWindowTaskInput, GetMaintenanceWindowTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
