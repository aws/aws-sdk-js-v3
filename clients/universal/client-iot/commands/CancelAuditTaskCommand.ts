import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelAuditTask } from "../model/CancelAuditTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelAuditTaskInput } from "../types/CancelAuditTaskInput";
import { CancelAuditTaskOutput } from "../types/CancelAuditTaskOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CancelAuditTaskInput";
export * from "../types/CancelAuditTaskOutput";
export * from "../types/CancelAuditTaskExceptionsUnion";

export class CancelAuditTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelAuditTaskInput,
      OutputTypesUnion,
      CancelAuditTaskOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CancelAuditTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelAuditTaskInput,
    CancelAuditTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: CancelAuditTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelAuditTaskInput, CancelAuditTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelAuditTaskInput, CancelAuditTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
