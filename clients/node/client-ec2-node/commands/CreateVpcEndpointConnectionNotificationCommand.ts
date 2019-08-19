import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateVpcEndpointConnectionNotification } from "../model/operations/CreateVpcEndpointConnectionNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateVpcEndpointConnectionNotificationInput } from "../types/CreateVpcEndpointConnectionNotificationInput";
import { CreateVpcEndpointConnectionNotificationOutput } from "../types/CreateVpcEndpointConnectionNotificationOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateVpcEndpointConnectionNotificationInput";
export * from "../types/CreateVpcEndpointConnectionNotificationOutput";
export * from "../types/CreateVpcEndpointConnectionNotificationExceptionsUnion";

export class CreateVpcEndpointConnectionNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateVpcEndpointConnectionNotificationInput,
      OutputTypesUnion,
      CreateVpcEndpointConnectionNotificationOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateVpcEndpointConnectionNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateVpcEndpointConnectionNotificationInput,
    CreateVpcEndpointConnectionNotificationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateVpcEndpointConnectionNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateVpcEndpointConnectionNotificationInput,
    CreateVpcEndpointConnectionNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateVpcEndpointConnectionNotificationInput,
        CreateVpcEndpointConnectionNotificationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
