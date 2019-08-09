import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateScheduledAudit } from "../model/UpdateScheduledAudit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateScheduledAuditInput } from "../types/UpdateScheduledAuditInput";
import { UpdateScheduledAuditOutput } from "../types/UpdateScheduledAuditOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateScheduledAuditInput";
export * from "../types/UpdateScheduledAuditOutput";
export * from "../types/UpdateScheduledAuditExceptionsUnion";

export class UpdateScheduledAuditCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateScheduledAuditInput,
      OutputTypesUnion,
      UpdateScheduledAuditOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateScheduledAudit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateScheduledAuditInput,
    UpdateScheduledAuditOutput,
    Blob
  >();

  constructor(readonly input: UpdateScheduledAuditInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateScheduledAuditInput,
    UpdateScheduledAuditOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateScheduledAuditInput, UpdateScheduledAuditOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
