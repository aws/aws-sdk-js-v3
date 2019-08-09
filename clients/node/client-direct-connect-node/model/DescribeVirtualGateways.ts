import { DescribeVirtualGatewaysInput } from "./DescribeVirtualGatewaysInput";
import { DescribeVirtualGatewaysOutput } from "./DescribeVirtualGatewaysOutput";
import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
