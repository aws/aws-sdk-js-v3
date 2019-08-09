import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGlobalCluster } from "../model/DeleteGlobalCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGlobalClusterInput } from "../types/DeleteGlobalClusterInput";
import { DeleteGlobalClusterOutput } from "../types/DeleteGlobalClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteGlobalClusterInput";
export * from "../types/DeleteGlobalClusterOutput";
export * from "../types/DeleteGlobalClusterExceptionsUnion";

export class DeleteGlobalClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGlobalClusterInput,
      OutputTypesUnion,
      DeleteGlobalClusterOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteGlobalCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGlobalClusterInput,
    DeleteGlobalClusterOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteGlobalClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteGlobalClusterInput,
    DeleteGlobalClusterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGlobalClusterInput, DeleteGlobalClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
