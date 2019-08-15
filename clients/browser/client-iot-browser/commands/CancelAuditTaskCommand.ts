import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelAuditTask } from "../model/operations/CancelAuditTask";
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
      Blob
    > {
  readonly model = CancelAuditTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelAuditTaskInput,
    CancelAuditTaskOutput,
    Blob
  >();

  constructor(readonly input: CancelAuditTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
