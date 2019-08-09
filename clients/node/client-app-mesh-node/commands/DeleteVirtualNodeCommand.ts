import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVirtualNode } from "../model/DeleteVirtualNode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVirtualNodeInput } from "../types/DeleteVirtualNodeInput";
import { DeleteVirtualNodeOutput } from "../types/DeleteVirtualNodeOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DeleteVirtualNodeInput";
export * from "../types/DeleteVirtualNodeOutput";
export * from "../types/DeleteVirtualNodeExceptionsUnion";

export class DeleteVirtualNodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVirtualNodeInput,
      OutputTypesUnion,
      DeleteVirtualNodeOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVirtualNode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVirtualNodeInput,
    DeleteVirtualNodeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVirtualNodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteVirtualNodeInput, DeleteVirtualNodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVirtualNodeInput, DeleteVirtualNodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
