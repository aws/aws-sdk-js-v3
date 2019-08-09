import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVpcEndpointConnectionNotifications } from "../model/DeleteVpcEndpointConnectionNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVpcEndpointConnectionNotificationsInput } from "../types/DeleteVpcEndpointConnectionNotificationsInput";
import { DeleteVpcEndpointConnectionNotificationsOutput } from "../types/DeleteVpcEndpointConnectionNotificationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteVpcEndpointConnectionNotificationsInput";
export * from "../types/DeleteVpcEndpointConnectionNotificationsOutput";
export * from "../types/DeleteVpcEndpointConnectionNotificationsExceptionsUnion";

export class DeleteVpcEndpointConnectionNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVpcEndpointConnectionNotificationsInput,
      OutputTypesUnion,
      DeleteVpcEndpointConnectionNotificationsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVpcEndpointConnectionNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVpcEndpointConnectionNotificationsInput,
    DeleteVpcEndpointConnectionNotificationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVpcEndpointConnectionNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVpcEndpointConnectionNotificationsInput,
    DeleteVpcEndpointConnectionNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVpcEndpointConnectionNotificationsInput,
        DeleteVpcEndpointConnectionNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
