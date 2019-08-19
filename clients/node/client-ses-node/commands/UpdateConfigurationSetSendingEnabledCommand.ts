import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConfigurationSetSendingEnabled } from "../model/operations/UpdateConfigurationSetSendingEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationSetSendingEnabledInput } from "../types/UpdateConfigurationSetSendingEnabledInput";
import { UpdateConfigurationSetSendingEnabledOutput } from "../types/UpdateConfigurationSetSendingEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/UpdateConfigurationSetSendingEnabledInput";
export * from "../types/UpdateConfigurationSetSendingEnabledOutput";
export * from "../types/UpdateConfigurationSetSendingEnabledExceptionsUnion";

export class UpdateConfigurationSetSendingEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationSetSendingEnabledInput,
      OutputTypesUnion,
      UpdateConfigurationSetSendingEnabledOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConfigurationSetSendingEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationSetSendingEnabledInput,
    UpdateConfigurationSetSendingEnabledOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConfigurationSetSendingEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationSetSendingEnabledInput,
    UpdateConfigurationSetSendingEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConfigurationSetSendingEnabledInput,
        UpdateConfigurationSetSendingEnabledOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
