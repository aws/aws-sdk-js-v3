import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationRecorder } from "../model/DeleteConfigurationRecorder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConfigurationRecorderInput } from "../types/DeleteConfigurationRecorderInput";
import { DeleteConfigurationRecorderOutput } from "../types/DeleteConfigurationRecorderOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteConfigurationRecorderInput";
export * from "../types/DeleteConfigurationRecorderOutput";
export * from "../types/DeleteConfigurationRecorderExceptionsUnion";

export class DeleteConfigurationRecorderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConfigurationRecorderInput,
      OutputTypesUnion,
      DeleteConfigurationRecorderOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteConfigurationRecorder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationRecorderInput,
    DeleteConfigurationRecorderOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteConfigurationRecorderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConfigurationRecorderInput,
    DeleteConfigurationRecorderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConfigurationRecorderInput,
        DeleteConfigurationRecorderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
