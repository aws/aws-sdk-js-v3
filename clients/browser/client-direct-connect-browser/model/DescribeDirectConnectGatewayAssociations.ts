import { DescribeDirectConnectGatewayAssociationsInput } from "./DescribeDirectConnectGatewayAssociationsInput";
import { DescribeDirectConnectGatewayAssociationsOutput } from "./DescribeDirectConnectGatewayAssociationsOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeDirectConnectGatewayAssociations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectConnectGatewayAssociations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectConnectGatewayAssociationsInput
  },
  output: {
    shape: DescribeDirectConnectGatewayAssociationsOutput
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
