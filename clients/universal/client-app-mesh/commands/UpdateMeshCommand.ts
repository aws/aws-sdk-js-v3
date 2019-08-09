import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMesh } from "../model/UpdateMesh";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMeshInput } from "../types/UpdateMeshInput";
import { UpdateMeshOutput } from "../types/UpdateMeshOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/UpdateMeshInput";
export * from "../types/UpdateMeshOutput";
export * from "../types/UpdateMeshExceptionsUnion";

export class UpdateMeshCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMeshInput,
      OutputTypesUnion,
      UpdateMeshOutput,
      AppMeshResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateMesh;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMeshInput,
    UpdateMeshOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateMeshInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateMeshInput, UpdateMeshOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMeshInput, UpdateMeshOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
