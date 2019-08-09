import { DescribeTransitGatewaysInput } from "./DescribeTransitGatewaysInput";
import { DescribeTransitGatewaysOutput } from "./DescribeTransitGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeTransitGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeTransitGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeTransitGatewaysInput
  },
  output: {
    shape: DescribeTransitGatewaysOutput
  },
  errors: []
};
