import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetDesiredCapacity } from "../model/SetDesiredCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetDesiredCapacityInput } from "../types/SetDesiredCapacityInput";
import { SetDesiredCapacityOutput } from "../types/SetDesiredCapacityOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/SetDesiredCapacityInput";
export * from "../types/SetDesiredCapacityOutput";
export * from "../types/SetDesiredCapacityExceptionsUnion";

export class SetDesiredCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetDesiredCapacityInput,
      OutputTypesUnion,
      SetDesiredCapacityOutput,
      AutoScalingResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SetDesiredCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetDesiredCapacityInput,
    SetDesiredCapacityOutput,
    Uint8Array
  >();

  constructor(readonly input: SetDesiredCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetDesiredCapacityInput,
    SetDesiredCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetDesiredCapacityInput, SetDesiredCapacityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
