import { DescribeEndpointConfigInput } from "../shapes/DescribeEndpointConfigInput";
import { DescribeEndpointConfigOutput } from "../shapes/DescribeEndpointConfigOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEndpointConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpointConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEndpointConfigInput
  },
  output: {
    shape: DescribeEndpointConfigOutput
  },
  errors: []
};
