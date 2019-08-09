import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachElasticLoadBalancer } from "../model/AttachElasticLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachElasticLoadBalancerInput } from "../types/AttachElasticLoadBalancerInput";
import { AttachElasticLoadBalancerOutput } from "../types/AttachElasticLoadBalancerOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/AttachElasticLoadBalancerInput";
export * from "../types/AttachElasticLoadBalancerOutput";
export * from "../types/AttachElasticLoadBalancerExceptionsUnion";

export class AttachElasticLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachElasticLoadBalancerInput,
      OutputTypesUnion,
      AttachElasticLoadBalancerOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachElasticLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachElasticLoadBalancerInput,
    AttachElasticLoadBalancerOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachElasticLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AttachElasticLoadBalancerInput,
    AttachElasticLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachElasticLoadBalancerInput, AttachElasticLoadBalancerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
