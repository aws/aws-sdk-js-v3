import { DescribeInternetGatewaysInput } from "../shapes/DescribeInternetGatewaysInput";
import { DescribeInternetGatewaysOutput } from "../shapes/DescribeInternetGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInternetGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInternetGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeInternetGatewaysInput
  },
  output: {
    shape: DescribeInternetGatewaysOutput
  },
  errors: []
};
