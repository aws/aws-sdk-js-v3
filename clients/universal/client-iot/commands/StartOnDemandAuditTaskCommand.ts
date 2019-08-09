import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartOnDemandAuditTask } from "../model/StartOnDemandAuditTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartOnDemandAuditTaskInput } from "../types/StartOnDemandAuditTaskInput";
import { StartOnDemandAuditTaskOutput } from "../types/StartOnDemandAuditTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/StartOnDemandAuditTaskInput";
export * from "../types/StartOnDemandAuditTaskOutput";
export * from "../types/StartOnDemandAuditTaskExceptionsUnion";

export class StartOnDemandAuditTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartOnDemandAuditTaskInput,
      OutputTypesUnion,
      StartOnDemandAuditTaskOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartOnDemandAuditTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartOnDemandAuditTaskInput,
    StartOnDemandAuditTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: StartOnDemandAuditTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartOnDemandAuditTaskInput,
    StartOnDemandAuditTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartOnDemandAuditTaskInput, StartOnDemandAuditTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
