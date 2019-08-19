import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyVpcEndpointConnectionNotification } from "../model/operations/ModifyVpcEndpointConnectionNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyVpcEndpointConnectionNotificationInput } from "../types/ModifyVpcEndpointConnectionNotificationInput";
import { ModifyVpcEndpointConnectionNotificationOutput } from "../types/ModifyVpcEndpointConnectionNotificationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyVpcEndpointConnectionNotificationInput";
export * from "../types/ModifyVpcEndpointConnectionNotificationOutput";
export * from "../types/ModifyVpcEndpointConnectionNotificationExceptionsUnion";

export class ModifyVpcEndpointConnectionNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyVpcEndpointConnectionNotificationInput,
      OutputTypesUnion,
      ModifyVpcEndpointConnectionNotificationOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyVpcEndpointConnectionNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyVpcEndpointConnectionNotificationInput,
    ModifyVpcEndpointConnectionNotificationOutput,
    Blob
  >();

  constructor(readonly input: ModifyVpcEndpointConnectionNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyVpcEndpointConnectionNotificationInput,
    ModifyVpcEndpointConnectionNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyVpcEndpointConnectionNotificationInput,
        ModifyVpcEndpointConnectionNotificationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
