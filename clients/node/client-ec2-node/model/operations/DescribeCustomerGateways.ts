import { DescribeCustomerGatewaysInput } from "../shapes/DescribeCustomerGatewaysInput";
import { DescribeCustomerGatewaysOutput } from "../shapes/DescribeCustomerGatewaysOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCustomerGateways: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCustomerGateways",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeCustomerGatewaysInput
  },
  output: {
    shape: DescribeCustomerGatewaysOutput
  },
  errors: []
};
