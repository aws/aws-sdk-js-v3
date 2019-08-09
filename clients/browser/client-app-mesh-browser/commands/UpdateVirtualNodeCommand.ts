import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVirtualNode } from "../model/UpdateVirtualNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVirtualNodeInput } from "../types/UpdateVirtualNodeInput";
import { UpdateVirtualNodeOutput } from "../types/UpdateVirtualNodeOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/UpdateVirtualNodeInput";
export * from "../types/UpdateVirtualNodeOutput";
export * from "../types/UpdateVirtualNodeExceptionsUnion";

export class UpdateVirtualNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVirtualNodeInput,
      OutputTypesUnion,
      UpdateVirtualNodeOutput,
      AppMeshResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateVirtualNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVirtualNodeInput,
    UpdateVirtualNodeOutput,
    Blob
  >();

  constructor(readonly input: UpdateVirtualNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateVirtualNodeInput, UpdateVirtualNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVirtualNodeInput, UpdateVirtualNodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
