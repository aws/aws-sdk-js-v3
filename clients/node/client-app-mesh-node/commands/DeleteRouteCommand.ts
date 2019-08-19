import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRoute } from "../model/operations/DeleteRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRouteInput } from "../types/DeleteRouteInput";
import { DeleteRouteOutput } from "../types/DeleteRouteOutput";
import { AppMeshResolvedConfiguration } from "../AppMeshConfiguration";
export * from "../types/DeleteRouteInput";
export * from "../types/DeleteRouteOutput";
export * from "../types/DeleteRouteExceptionsUnion";

export class DeleteRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRouteInput,
      OutputTypesUnion,
      DeleteRouteOutput,
      AppMeshResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRouteInput,
    DeleteRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppMeshResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRouteInput, DeleteRouteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRouteInput, DeleteRouteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
