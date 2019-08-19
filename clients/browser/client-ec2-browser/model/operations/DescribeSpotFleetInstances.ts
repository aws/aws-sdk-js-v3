import { DescribeSpotFleetInstancesInput } from "../shapes/DescribeSpotFleetInstancesInput";
import { DescribeSpotFleetInstancesOutput } from "../shapes/DescribeSpotFleetInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSpotFleetInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSpotFleetInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSpotFleetInstancesInput
  },
  output: {
    shape: DescribeSpotFleetInstancesOutput
  },
  errors: []
};
