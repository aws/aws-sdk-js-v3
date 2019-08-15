import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVirtualRouter } from "../model/operations/DeleteVirtualRouter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVirtualRouterInput } from "../types/DeleteVirtualRouterInput";
import { DeleteVirtualRouterOutput } from "../types/DeleteVirtualRouterOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DeleteVirtualRouterInput";
export * from "../types/DeleteVirtualRouterOutput";
export * from "../types/DeleteVirtualRouterExceptionsUnion";

export class DeleteVirtualRouterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVirtualRouterInput,
      OutputTypesUnion,
      DeleteVirtualRouterOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVirtualRouter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVirtualRouterInput,
    DeleteVirtualRouterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVirtualRouterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVirtualRouterInput,
    DeleteVirtualRouterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVirtualRouterInput, DeleteVirtualRouterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
