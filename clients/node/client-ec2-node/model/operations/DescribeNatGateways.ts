import { DescribeNatGatewaysInput } from "../shapes/DescribeNatGatewaysInput";
import { DescribeNatGatewaysOutput } from "../shapes/DescribeNatGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeNatGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeNatGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeNatGatewaysInput
  },
  output: {
    shape: DescribeNatGatewaysOutput
  },
  errors: []
};
