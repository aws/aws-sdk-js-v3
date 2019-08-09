import { DescribeEgressOnlyInternetGatewaysInput } from "./DescribeEgressOnlyInternetGatewaysInput";
import { DescribeEgressOnlyInternetGatewaysOutput } from "./DescribeEgressOnlyInternetGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeEgressOnlyInternetGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEgressOnlyInternetGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEgressOnlyInternetGatewaysInput
  },
  output: {
    shape: DescribeEgressOnlyInternetGatewaysOutput
  },
  errors: []
};
