import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAppLaunchConfiguration } from "../model/operations/DeleteAppLaunchConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAppLaunchConfigurationInput } from "../types/DeleteAppLaunchConfigurationInput";
import { DeleteAppLaunchConfigurationOutput } from "../types/DeleteAppLaunchConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/DeleteAppLaunchConfigurationInput";
export * from "../types/DeleteAppLaunchConfigurationOutput";
export * from "../types/DeleteAppLaunchConfigurationExceptionsUnion";

export class DeleteAppLaunchConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAppLaunchConfigurationInput,
      OutputTypesUnion,
      DeleteAppLaunchConfigurationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAppLaunchConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAppLaunchConfigurationInput,
    DeleteAppLaunchConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAppLaunchConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAppLaunchConfigurationInput,
    DeleteAppLaunchConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteAppLaunchConfigurationInput,
        DeleteAppLaunchConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
