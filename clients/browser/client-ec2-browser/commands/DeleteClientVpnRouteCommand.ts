import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteClientVpnRoute } from "../model/operations/DeleteClientVpnRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteClientVpnRouteInput } from "../types/DeleteClientVpnRouteInput";
import { DeleteClientVpnRouteOutput } from "../types/DeleteClientVpnRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteClientVpnRouteInput";
export * from "../types/DeleteClientVpnRouteOutput";
export * from "../types/DeleteClientVpnRouteExceptionsUnion";

export class DeleteClientVpnRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteClientVpnRouteInput,
      OutputTypesUnion,
      DeleteClientVpnRouteOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteClientVpnRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteClientVpnRouteInput,
    DeleteClientVpnRouteOutput,
    Blob
  >();

  constructor(readonly input: DeleteClientVpnRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteClientVpnRouteInput,
    DeleteClientVpnRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteClientVpnRouteInput, DeleteClientVpnRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
