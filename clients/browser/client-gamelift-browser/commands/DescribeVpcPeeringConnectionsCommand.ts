import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcPeeringConnections } from "../model/operations/DescribeVpcPeeringConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcPeeringConnectionsInput } from "../types/DescribeVpcPeeringConnectionsInput";
import { DescribeVpcPeeringConnectionsOutput } from "../types/DescribeVpcPeeringConnectionsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeVpcPeeringConnectionsInput";
export * from "../types/DescribeVpcPeeringConnectionsOutput";
export * from "../types/DescribeVpcPeeringConnectionsExceptionsUnion";

export class DescribeVpcPeeringConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcPeeringConnectionsInput,
      OutputTypesUnion,
      DescribeVpcPeeringConnectionsOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpcPeeringConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcPeeringConnectionsInput,
    DescribeVpcPeeringConnectionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeVpcPeeringConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcPeeringConnectionsInput,
    DescribeVpcPeeringConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcPeeringConnectionsInput,
        DescribeVpcPeeringConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
