import { DescribeEndpointInput } from "../shapes/DescribeEndpointInput";
import { DescribeEndpointOutput } from "../shapes/DescribeEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEndpointInput
  },
  output: {
    shape: DescribeEndpointOutput
  },
  errors: []
};
