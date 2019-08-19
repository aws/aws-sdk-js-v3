import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartMaintenance } from "../model/operations/StartMaintenance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartMaintenanceInput } from "../types/StartMaintenanceInput";
import { StartMaintenanceOutput } from "../types/StartMaintenanceOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/StartMaintenanceInput";
export * from "../types/StartMaintenanceOutput";
export * from "../types/StartMaintenanceExceptionsUnion";

export class StartMaintenanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartMaintenanceInput,
      OutputTypesUnion,
      StartMaintenanceOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartMaintenance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartMaintenanceInput,
    StartMaintenanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartMaintenanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<StartMaintenanceInput, StartMaintenanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartMaintenanceInput, StartMaintenanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
