import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLaunchConfiguration } from "../model/operations/CreateLaunchConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLaunchConfigurationInput } from "../types/CreateLaunchConfigurationInput";
import { CreateLaunchConfigurationOutput } from "../types/CreateLaunchConfigurationOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/CreateLaunchConfigurationInput";
export * from "../types/CreateLaunchConfigurationOutput";
export * from "../types/CreateLaunchConfigurationExceptionsUnion";

export class CreateLaunchConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLaunchConfigurationInput,
      OutputTypesUnion,
      CreateLaunchConfigurationOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLaunchConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLaunchConfigurationInput,
    CreateLaunchConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLaunchConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLaunchConfigurationInput,
    CreateLaunchConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLaunchConfigurationInput, CreateLaunchConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
