import { DescribeFleetInstancesInput } from "./DescribeFleetInstancesInput";
import { DescribeFleetInstancesOutput } from "./DescribeFleetInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeFleetInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFleetInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeFleetInstancesInput
  },
  output: {
    shape: DescribeFleetInstancesOutput
  },
  errors: []
};
