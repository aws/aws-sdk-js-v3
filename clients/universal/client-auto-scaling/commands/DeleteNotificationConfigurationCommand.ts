import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNotificationConfiguration } from "../model/DeleteNotificationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotificationConfigurationInput } from "../types/DeleteNotificationConfigurationInput";
import { DeleteNotificationConfigurationOutput } from "../types/DeleteNotificationConfigurationOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DeleteNotificationConfigurationInput";
export * from "../types/DeleteNotificationConfigurationOutput";
export * from "../types/DeleteNotificationConfigurationExceptionsUnion";

export class DeleteNotificationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotificationConfigurationInput,
      OutputTypesUnion,
      DeleteNotificationConfigurationOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteNotificationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotificationConfigurationInput,
    DeleteNotificationConfigurationOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteNotificationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotificationConfigurationInput,
    DeleteNotificationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteNotificationConfigurationInput,
        DeleteNotificationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
