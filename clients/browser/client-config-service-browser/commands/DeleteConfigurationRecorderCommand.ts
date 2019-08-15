import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteConfigurationRecorder } from "../model/operations/DeleteConfigurationRecorder";
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
      Blob
    > {
  readonly model = DeleteConfigurationRecorder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConfigurationRecorderInput,
    DeleteConfigurationRecorderOutput,
    Blob
  >();

  constructor(readonly input: DeleteConfigurationRecorderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
