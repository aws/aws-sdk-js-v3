import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RegisterScalableTarget } from "../model/RegisterScalableTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterScalableTargetInput } from "../types/RegisterScalableTargetInput";
import { RegisterScalableTargetOutput } from "../types/RegisterScalableTargetOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/RegisterScalableTargetInput";
export * from "../types/RegisterScalableTargetOutput";
export * from "../types/RegisterScalableTargetExceptionsUnion";

export class RegisterScalableTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterScalableTargetInput,
      OutputTypesUnion,
      RegisterScalableTargetOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RegisterScalableTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterScalableTargetInput,
    RegisterScalableTargetOutput,
    Uint8Array
  >();

  constructor(readonly input: RegisterScalableTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterScalableTargetInput,
    RegisterScalableTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterScalableTargetInput, RegisterScalableTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
