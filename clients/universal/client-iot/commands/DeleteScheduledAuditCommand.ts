import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScheduledAudit } from "../model/DeleteScheduledAudit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScheduledAuditInput } from "../types/DeleteScheduledAuditInput";
import { DeleteScheduledAuditOutput } from "../types/DeleteScheduledAuditOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteScheduledAuditInput";
export * from "../types/DeleteScheduledAuditOutput";
export * from "../types/DeleteScheduledAuditExceptionsUnion";

export class DeleteScheduledAuditCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScheduledAuditInput,
      OutputTypesUnion,
      DeleteScheduledAuditOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteScheduledAudit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScheduledAuditInput,
    DeleteScheduledAuditOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteScheduledAuditInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteScheduledAuditInput,
    DeleteScheduledAuditOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScheduledAuditInput, DeleteScheduledAuditOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
