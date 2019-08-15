import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAccountAuditConfiguration } from "../model/operations/UpdateAccountAuditConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAccountAuditConfigurationInput } from "../types/UpdateAccountAuditConfigurationInput";
import { UpdateAccountAuditConfigurationOutput } from "../types/UpdateAccountAuditConfigurationOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/UpdateAccountAuditConfigurationInput";
export * from "../types/UpdateAccountAuditConfigurationOutput";
export * from "../types/UpdateAccountAuditConfigurationExceptionsUnion";

export class UpdateAccountAuditConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAccountAuditConfigurationInput,
      OutputTypesUnion,
      UpdateAccountAuditConfigurationOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAccountAuditConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAccountAuditConfigurationInput,
    UpdateAccountAuditConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAccountAuditConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAccountAuditConfigurationInput,
    UpdateAccountAuditConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateAccountAuditConfigurationInput,
        UpdateAccountAuditConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
