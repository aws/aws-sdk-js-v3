import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAccountAuditConfiguration } from "../model/operations/DeleteAccountAuditConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAccountAuditConfigurationInput } from "../types/DeleteAccountAuditConfigurationInput";
import { DeleteAccountAuditConfigurationOutput } from "../types/DeleteAccountAuditConfigurationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteAccountAuditConfigurationInput";
export * from "../types/DeleteAccountAuditConfigurationOutput";
export * from "../types/DeleteAccountAuditConfigurationExceptionsUnion";

export class DeleteAccountAuditConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAccountAuditConfigurationInput,
      OutputTypesUnion,
      DeleteAccountAuditConfigurationOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAccountAuditConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAccountAuditConfigurationInput,
    DeleteAccountAuditConfigurationOutput,
    Blob
  >();

  constructor(readonly input: DeleteAccountAuditConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAccountAuditConfigurationInput,
    DeleteAccountAuditConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteAccountAuditConfigurationInput,
        DeleteAccountAuditConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
