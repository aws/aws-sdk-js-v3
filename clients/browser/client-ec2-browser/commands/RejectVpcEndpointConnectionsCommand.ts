import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectVpcEndpointConnections } from "../model/RejectVpcEndpointConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectVpcEndpointConnectionsInput } from "../types/RejectVpcEndpointConnectionsInput";
import { RejectVpcEndpointConnectionsOutput } from "../types/RejectVpcEndpointConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RejectVpcEndpointConnectionsInput";
export * from "../types/RejectVpcEndpointConnectionsOutput";
export * from "../types/RejectVpcEndpointConnectionsExceptionsUnion";

export class RejectVpcEndpointConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectVpcEndpointConnectionsInput,
      OutputTypesUnion,
      RejectVpcEndpointConnectionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RejectVpcEndpointConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectVpcEndpointConnectionsInput,
    RejectVpcEndpointConnectionsOutput,
    Blob
  >();

  constructor(readonly input: RejectVpcEndpointConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectVpcEndpointConnectionsInput,
    RejectVpcEndpointConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RejectVpcEndpointConnectionsInput,
        RejectVpcEndpointConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
