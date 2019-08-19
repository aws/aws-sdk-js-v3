import { DescribeVpnGatewaysInput } from "../shapes/DescribeVpnGatewaysInput";
import { DescribeVpnGatewaysOutput } from "../shapes/DescribeVpnGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpnGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpnGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpnGatewaysInput
  },
  output: {
    shape: DescribeVpnGatewaysOutput
  },
  errors: []
};
