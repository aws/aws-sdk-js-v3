import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetTimeBasedAutoScaling } from "../model/SetTimeBasedAutoScaling";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetTimeBasedAutoScalingInput } from "../types/SetTimeBasedAutoScalingInput";
import { SetTimeBasedAutoScalingOutput } from "../types/SetTimeBasedAutoScalingOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/SetTimeBasedAutoScalingInput";
export * from "../types/SetTimeBasedAutoScalingOutput";
export * from "../types/SetTimeBasedAutoScalingExceptionsUnion";

export class SetTimeBasedAutoScalingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetTimeBasedAutoScalingInput,
      OutputTypesUnion,
      SetTimeBasedAutoScalingOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetTimeBasedAutoScaling;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetTimeBasedAutoScalingInput,
    SetTimeBasedAutoScalingOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetTimeBasedAutoScalingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetTimeBasedAutoScalingInput,
    SetTimeBasedAutoScalingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetTimeBasedAutoScalingInput, SetTimeBasedAutoScalingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
