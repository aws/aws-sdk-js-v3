import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMesh } from "../model/DeleteMesh";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMeshInput } from "../types/DeleteMeshInput";
import { DeleteMeshOutput } from "../types/DeleteMeshOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DeleteMeshInput";
export * from "../types/DeleteMeshOutput";
export * from "../types/DeleteMeshExceptionsUnion";

export class DeleteMeshCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMeshInput,
      OutputTypesUnion,
      DeleteMeshOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMesh;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMeshInput,
    DeleteMeshOutput,
    Blob
  >();

  constructor(readonly input: DeleteMeshInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMeshInput, DeleteMeshOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMeshInput, DeleteMeshOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
