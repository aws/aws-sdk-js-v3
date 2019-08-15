import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDirectConnectGatewayAssociationProposals } from "../model/operations/DescribeDirectConnectGatewayAssociationProposals";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDirectConnectGatewayAssociationProposalsInput } from "../types/DescribeDirectConnectGatewayAssociationProposalsInput";
import { DescribeDirectConnectGatewayAssociationProposalsOutput } from "../types/DescribeDirectConnectGatewayAssociationProposalsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeDirectConnectGatewayAssociationProposalsInput";
export * from "../types/DescribeDirectConnectGatewayAssociationProposalsOutput";
export * from "../types/DescribeDirectConnectGatewayAssociationProposalsExceptionsUnion";

export class DescribeDirectConnectGatewayAssociationProposalsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDirectConnectGatewayAssociationProposalsInput,
      OutputTypesUnion,
      DescribeDirectConnectGatewayAssociationProposalsOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDirectConnectGatewayAssociationProposals;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDirectConnectGatewayAssociationProposalsInput,
    DescribeDirectConnectGatewayAssociationProposalsOutput,
    Blob
  >();

  constructor(
    readonly input: DescribeDirectConnectGatewayAssociationProposalsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDirectConnectGatewayAssociationProposalsInput,
    DescribeDirectConnectGatewayAssociationProposalsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDirectConnectGatewayAssociationProposalsInput,
        DescribeDirectConnectGatewayAssociationProposalsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
