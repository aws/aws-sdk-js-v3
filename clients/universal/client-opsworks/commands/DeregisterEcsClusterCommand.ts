import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterEcsCluster } from "../model/DeregisterEcsCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterEcsClusterInput } from "../types/DeregisterEcsClusterInput";
import { DeregisterEcsClusterOutput } from "../types/DeregisterEcsClusterOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DeregisterEcsClusterInput";
export * from "../types/DeregisterEcsClusterOutput";
export * from "../types/DeregisterEcsClusterExceptionsUnion";

export class DeregisterEcsClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterEcsClusterInput,
      OutputTypesUnion,
      DeregisterEcsClusterOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterEcsCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterEcsClusterInput,
    DeregisterEcsClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterEcsClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterEcsClusterInput,
    DeregisterEcsClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterEcsClusterInput, DeregisterEcsClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
