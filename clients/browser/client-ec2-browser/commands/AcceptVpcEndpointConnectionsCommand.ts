import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptVpcEndpointConnections } from "../model/AcceptVpcEndpointConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptVpcEndpointConnectionsInput } from "../types/AcceptVpcEndpointConnectionsInput";
import { AcceptVpcEndpointConnectionsOutput } from "../types/AcceptVpcEndpointConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AcceptVpcEndpointConnectionsInput";
export * from "../types/AcceptVpcEndpointConnectionsOutput";
export * from "../types/AcceptVpcEndpointConnectionsExceptionsUnion";

export class AcceptVpcEndpointConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptVpcEndpointConnectionsInput,
      OutputTypesUnion,
      AcceptVpcEndpointConnectionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AcceptVpcEndpointConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptVpcEndpointConnectionsInput,
    AcceptVpcEndpointConnectionsOutput,
    Blob
  >();

  constructor(readonly input: AcceptVpcEndpointConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptVpcEndpointConnectionsInput,
    AcceptVpcEndpointConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptVpcEndpointConnectionsInput,
        AcceptVpcEndpointConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
