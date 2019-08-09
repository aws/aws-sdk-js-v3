import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterInstancesFromLoadBalancer } from "../model/DeregisterInstancesFromLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterInstancesFromLoadBalancerInput } from "../types/DeregisterInstancesFromLoadBalancerInput";
import { DeregisterInstancesFromLoadBalancerOutput } from "../types/DeregisterInstancesFromLoadBalancerOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DeregisterInstancesFromLoadBalancerInput";
export * from "../types/DeregisterInstancesFromLoadBalancerOutput";
export * from "../types/DeregisterInstancesFromLoadBalancerExceptionsUnion";

export class DeregisterInstancesFromLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterInstancesFromLoadBalancerInput,
      OutputTypesUnion,
      DeregisterInstancesFromLoadBalancerOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterInstancesFromLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterInstancesFromLoadBalancerInput,
    DeregisterInstancesFromLoadBalancerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterInstancesFromLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterInstancesFromLoadBalancerInput,
    DeregisterInstancesFromLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeregisterInstancesFromLoadBalancerInput,
        DeregisterInstancesFromLoadBalancerOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
