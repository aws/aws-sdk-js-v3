import { DescribeVirtualGatewaysInput } from "../shapes/DescribeVirtualGatewaysInput";
import { DescribeVirtualGatewaysOutput } from "../shapes/DescribeVirtualGatewaysOutput";
import { DirectConnectServerException } from "../shapes/DirectConnectServerException";
import { DirectConnectClientException } from "../shapes/DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVirtualGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVirtualGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVirtualGatewaysInput
  },
  output: {
    shape: DescribeVirtualGatewaysOutput
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
