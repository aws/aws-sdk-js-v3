import { DescribeDirectConnectGatewayAttachmentsInput } from "../shapes/DescribeDirectConnectGatewayAttachmentsInput";
import { DescribeDirectConnectGatewayAttachmentsOutput } from "../shapes/DescribeDirectConnectGatewayAttachmentsOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDirectConnectGatewayAttachments: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDirectConnectGatewayAttachments",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeDirectConnectGatewayAttachmentsInput
  },
  output: {
    shape: DescribeDirectConnectGatewayAttachmentsOutput
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
