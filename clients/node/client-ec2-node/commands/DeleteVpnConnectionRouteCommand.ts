import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteVpnConnectionRoute } from "../model/operations/DeleteVpnConnectionRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpnConnectionRouteInput } from "../types/DeleteVpnConnectionRouteInput";
import { DeleteVpnConnectionRouteOutput } from "../types/DeleteVpnConnectionRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpnConnectionRouteInput";
export * from "../types/DeleteVpnConnectionRouteOutput";
export * from "../types/DeleteVpnConnectionRouteExceptionsUnion";

export class DeleteVpnConnectionRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpnConnectionRouteInput,
      OutputTypesUnion,
      DeleteVpnConnectionRouteOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteVpnConnectionRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpnConnectionRouteInput,
    DeleteVpnConnectionRouteOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteVpnConnectionRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpnConnectionRouteInput,
    DeleteVpnConnectionRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVpnConnectionRouteInput, DeleteVpnConnectionRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
