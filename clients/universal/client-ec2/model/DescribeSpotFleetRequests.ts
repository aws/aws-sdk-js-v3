import { DescribeSpotFleetRequestsInput } from "./DescribeSpotFleetRequestsInput";
import { DescribeSpotFleetRequestsOutput } from "./DescribeSpotFleetRequestsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSpotFleetRequests: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotFleetRequests",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotFleetRequestsInput
  },
  output: {
    shape: DescribeSpotFleetRequestsOutput
  },
  errors: []
};
