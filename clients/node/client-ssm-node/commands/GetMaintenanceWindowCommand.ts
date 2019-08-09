import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMaintenanceWindow } from "../model/GetMaintenanceWindow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMaintenanceWindowInput } from "../types/GetMaintenanceWindowInput";
import { GetMaintenanceWindowOutput } from "../types/GetMaintenanceWindowOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetMaintenanceWindowInput";
export * from "../types/GetMaintenanceWindowOutput";
export * from "../types/GetMaintenanceWindowExceptionsUnion";

export class GetMaintenanceWindowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMaintenanceWindowInput,
      OutputTypesUnion,
      GetMaintenanceWindowOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMaintenanceWindow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMaintenanceWindowInput,
    GetMaintenanceWindowOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMaintenanceWindowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMaintenanceWindowInput,
    GetMaintenanceWindowOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMaintenanceWindowInput, GetMaintenanceWindowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
