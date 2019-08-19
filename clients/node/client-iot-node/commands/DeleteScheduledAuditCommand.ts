import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteScheduledAudit } from "../model/operations/DeleteScheduledAudit";
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
      _stream.Readable
    > {
  readonly model = DeleteScheduledAudit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScheduledAuditInput,
    DeleteScheduledAuditOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteScheduledAuditInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
