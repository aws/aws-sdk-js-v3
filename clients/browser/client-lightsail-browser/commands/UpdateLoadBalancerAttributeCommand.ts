import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLoadBalancerAttribute } from "../model/operations/UpdateLoadBalancerAttribute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLoadBalancerAttributeInput } from "../types/UpdateLoadBalancerAttributeInput";
import { UpdateLoadBalancerAttributeOutput } from "../types/UpdateLoadBalancerAttributeOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/UpdateLoadBalancerAttributeInput";
export * from "../types/UpdateLoadBalancerAttributeOutput";
export * from "../types/UpdateLoadBalancerAttributeExceptionsUnion";

export class UpdateLoadBalancerAttributeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLoadBalancerAttributeInput,
      OutputTypesUnion,
      UpdateLoadBalancerAttributeOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLoadBalancerAttribute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLoadBalancerAttributeInput,
    UpdateLoadBalancerAttributeOutput,
    Blob
  >();

  constructor(readonly input: UpdateLoadBalancerAttributeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLoadBalancerAttributeInput,
    UpdateLoadBalancerAttributeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateLoadBalancerAttributeInput,
        UpdateLoadBalancerAttributeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
