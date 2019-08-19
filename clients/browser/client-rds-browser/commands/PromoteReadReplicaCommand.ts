import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PromoteReadReplica } from "../model/operations/PromoteReadReplica";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PromoteReadReplicaInput } from "../types/PromoteReadReplicaInput";
import { PromoteReadReplicaOutput } from "../types/PromoteReadReplicaOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/PromoteReadReplicaInput";
export * from "../types/PromoteReadReplicaOutput";
export * from "../types/PromoteReadReplicaExceptionsUnion";

export class PromoteReadReplicaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PromoteReadReplicaInput,
      OutputTypesUnion,
      PromoteReadReplicaOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = PromoteReadReplica;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PromoteReadReplicaInput,
    PromoteReadReplicaOutput,
    Blob
  >();

  constructor(readonly input: PromoteReadReplicaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PromoteReadReplicaInput,
    PromoteReadReplicaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PromoteReadReplicaInput, PromoteReadReplicaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
