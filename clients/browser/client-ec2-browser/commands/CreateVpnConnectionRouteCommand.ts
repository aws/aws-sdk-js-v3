import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateVpnConnectionRoute } from "../model/CreateVpnConnectionRoute";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpnConnectionRouteInput } from "../types/CreateVpnConnectionRouteInput";
import { CreateVpnConnectionRouteOutput } from "../types/CreateVpnConnectionRouteOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpnConnectionRouteInput";
export * from "../types/CreateVpnConnectionRouteOutput";
export * from "../types/CreateVpnConnectionRouteExceptionsUnion";

export class CreateVpnConnectionRouteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpnConnectionRouteInput,
      OutputTypesUnion,
      CreateVpnConnectionRouteOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateVpnConnectionRoute;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpnConnectionRouteInput,
    CreateVpnConnectionRouteOutput,
    Blob
  >();

  constructor(readonly input: CreateVpnConnectionRouteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpnConnectionRouteInput,
    CreateVpnConnectionRouteOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateVpnConnectionRouteInput, CreateVpnConnectionRouteOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
