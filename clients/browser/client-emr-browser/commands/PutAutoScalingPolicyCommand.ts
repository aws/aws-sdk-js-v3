import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutAutoScalingPolicy } from "../model/operations/PutAutoScalingPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutAutoScalingPolicyInput } from "../types/PutAutoScalingPolicyInput";
import { PutAutoScalingPolicyOutput } from "../types/PutAutoScalingPolicyOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/PutAutoScalingPolicyInput";
export * from "../types/PutAutoScalingPolicyOutput";
export * from "../types/PutAutoScalingPolicyExceptionsUnion";

export class PutAutoScalingPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutAutoScalingPolicyInput,
      OutputTypesUnion,
      PutAutoScalingPolicyOutput,
      EMRResolvedConfiguration,
      Blob
    > {
  readonly model = PutAutoScalingPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutAutoScalingPolicyInput,
    PutAutoScalingPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutAutoScalingPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutAutoScalingPolicyInput,
    PutAutoScalingPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
