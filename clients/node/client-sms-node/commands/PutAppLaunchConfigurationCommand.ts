import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutAppLaunchConfiguration } from "../model/operations/PutAppLaunchConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAppLaunchConfigurationInput } from "../types/PutAppLaunchConfigurationInput";
import { PutAppLaunchConfigurationOutput } from "../types/PutAppLaunchConfigurationOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/PutAppLaunchConfigurationInput";
export * from "../types/PutAppLaunchConfigurationOutput";
export * from "../types/PutAppLaunchConfigurationExceptionsUnion";

export class PutAppLaunchConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAppLaunchConfigurationInput,
      OutputTypesUnion,
      PutAppLaunchConfigurationOutput,
      SMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutAppLaunchConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAppLaunchConfigurationInput,
    PutAppLaunchConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutAppLaunchConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAppLaunchConfigurationInput,
    PutAppLaunchConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAppLaunchConfigurationInput, PutAppLaunchConfigurationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
