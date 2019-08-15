import { DescribeDirectConnectGatewayAssociationProposalsInput } from "../shapes/DescribeDirectConnectGatewayAssociationProposalsInput";
import { DescribeDirectConnectGatewayAssociationProposalsOutput } from "../shapes/DescribeDirectConnectGatewayAssociationProposalsOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDirectConnectGatewayAssociationProposals: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectConnectGatewayAssociationProposals",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectConnectGatewayAssociationProposalsInput
  },
  output: {
    shape: DescribeDirectConnectGatewayAssociationProposalsOutput
  },
  errors: [
    {
      shape: DirectConnectServerException
    },
    {
      shape: DirectConnectClientException
    }
  ]
};
