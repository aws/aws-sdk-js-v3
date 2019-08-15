import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBClusterEndpoint } from "../model/operations/DeleteDBClusterEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterEndpointInput } from "../types/DeleteDBClusterEndpointInput";
import { DeleteDBClusterEndpointOutput } from "../types/DeleteDBClusterEndpointOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBClusterEndpointInput";
export * from "../types/DeleteDBClusterEndpointOutput";
export * from "../types/DeleteDBClusterEndpointExceptionsUnion";

export class DeleteDBClusterEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterEndpointInput,
      OutputTypesUnion,
      DeleteDBClusterEndpointOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBClusterEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterEndpointInput,
    DeleteDBClusterEndpointOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBClusterEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDBClusterEndpointInput,
    DeleteDBClusterEndpointOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBClusterEndpointInput, DeleteDBClusterEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
