import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetLoadBasedAutoScaling } from "../model/operations/SetLoadBasedAutoScaling";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetLoadBasedAutoScalingInput } from "../types/SetLoadBasedAutoScalingInput";
import { SetLoadBasedAutoScalingOutput } from "../types/SetLoadBasedAutoScalingOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/SetLoadBasedAutoScalingInput";
export * from "../types/SetLoadBasedAutoScalingOutput";
export * from "../types/SetLoadBasedAutoScalingExceptionsUnion";

export class SetLoadBasedAutoScalingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetLoadBasedAutoScalingInput,
      OutputTypesUnion,
      SetLoadBasedAutoScalingOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = SetLoadBasedAutoScaling;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetLoadBasedAutoScalingInput,
    SetLoadBasedAutoScalingOutput,
    Blob
  >();

  constructor(readonly input: SetLoadBasedAutoScalingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetLoadBasedAutoScalingInput,
    SetLoadBasedAutoScalingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetLoadBasedAutoScalingInput, SetLoadBasedAutoScalingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
