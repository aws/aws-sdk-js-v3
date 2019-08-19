import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteLaunchConfiguration } from "../model/operations/DeleteLaunchConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLaunchConfigurationInput } from "../types/DeleteLaunchConfigurationInput";
import { DeleteLaunchConfigurationOutput } from "../types/DeleteLaunchConfigurationOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DeleteLaunchConfigurationInput";
export * from "../types/DeleteLaunchConfigurationOutput";
export * from "../types/DeleteLaunchConfigurationExceptionsUnion";

export class DeleteLaunchConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLaunchConfigurationInput,
      OutputTypesUnion,
      DeleteLaunchConfigurationOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteLaunchConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLaunchConfigurationInput,
    DeleteLaunchConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteLaunchConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLaunchConfigurationInput,
    DeleteLaunchConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLaunchConfigurationInput, DeleteLaunchConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
