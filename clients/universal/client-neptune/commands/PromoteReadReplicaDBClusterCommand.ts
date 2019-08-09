import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PromoteReadReplicaDBCluster } from "../model/PromoteReadReplicaDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PromoteReadReplicaDBClusterInput } from "../types/PromoteReadReplicaDBClusterInput";
import { PromoteReadReplicaDBClusterOutput } from "../types/PromoteReadReplicaDBClusterOutput";
import { NeptuneResolvedConfiguration } from "../NeptuneConfiguration";
export * from "../types/PromoteReadReplicaDBClusterInput";
export * from "../types/PromoteReadReplicaDBClusterOutput";
export * from "../types/PromoteReadReplicaDBClusterExceptionsUnion";

export class PromoteReadReplicaDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PromoteReadReplicaDBClusterInput,
      OutputTypesUnion,
      PromoteReadReplicaDBClusterOutput,
      NeptuneResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PromoteReadReplicaDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PromoteReadReplicaDBClusterInput,
    PromoteReadReplicaDBClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: PromoteReadReplicaDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: NeptuneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PromoteReadReplicaDBClusterInput,
    PromoteReadReplicaDBClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PromoteReadReplicaDBClusterInput,
        PromoteReadReplicaDBClusterOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
