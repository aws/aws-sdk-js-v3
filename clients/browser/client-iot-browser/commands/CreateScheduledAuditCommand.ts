import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateScheduledAudit } from "../model/operations/CreateScheduledAudit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateScheduledAuditInput } from "../types/CreateScheduledAuditInput";
import { CreateScheduledAuditOutput } from "../types/CreateScheduledAuditOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateScheduledAuditInput";
export * from "../types/CreateScheduledAuditOutput";
export * from "../types/CreateScheduledAuditExceptionsUnion";

export class CreateScheduledAuditCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateScheduledAuditInput,
      OutputTypesUnion,
      CreateScheduledAuditOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateScheduledAudit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateScheduledAuditInput,
    CreateScheduledAuditOutput,
    Blob
  >();

  constructor(readonly input: CreateScheduledAuditInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateScheduledAuditInput,
    CreateScheduledAuditOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateScheduledAuditInput, CreateScheduledAuditOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
