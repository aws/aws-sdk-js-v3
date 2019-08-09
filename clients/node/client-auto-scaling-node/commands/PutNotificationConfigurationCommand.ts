import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutNotificationConfiguration } from "../model/PutNotificationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutNotificationConfigurationInput } from "../types/PutNotificationConfigurationInput";
import { PutNotificationConfigurationOutput } from "../types/PutNotificationConfigurationOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/PutNotificationConfigurationInput";
export * from "../types/PutNotificationConfigurationOutput";
export * from "../types/PutNotificationConfigurationExceptionsUnion";

export class PutNotificationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutNotificationConfigurationInput,
      OutputTypesUnion,
      PutNotificationConfigurationOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutNotificationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutNotificationConfigurationInput,
    PutNotificationConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutNotificationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutNotificationConfigurationInput,
    PutNotificationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutNotificationConfigurationInput,
        PutNotificationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
