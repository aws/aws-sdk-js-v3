import { DescribeSpotInstanceRequestsInput } from "../shapes/DescribeSpotInstanceRequestsInput";
import { DescribeSpotInstanceRequestsOutput } from "../shapes/DescribeSpotInstanceRequestsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSpotInstanceRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotInstanceRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotInstanceRequestsInput
  },
  output: {
    shape: DescribeSpotInstanceRequestsOutput
  },
  errors: []
};
