import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAppLaunchConfiguration } from "../model/operations/GetAppLaunchConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppLaunchConfigurationInput } from "../types/GetAppLaunchConfigurationInput";
import { GetAppLaunchConfigurationOutput } from "../types/GetAppLaunchConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/GetAppLaunchConfigurationInput";
export * from "../types/GetAppLaunchConfigurationOutput";
export * from "../types/GetAppLaunchConfigurationExceptionsUnion";

export class GetAppLaunchConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAppLaunchConfigurationInput,
      OutputTypesUnion,
      GetAppLaunchConfigurationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAppLaunchConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppLaunchConfigurationInput,
    GetAppLaunchConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAppLaunchConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAppLaunchConfigurationInput,
    GetAppLaunchConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAppLaunchConfigurationInput, GetAppLaunchConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
