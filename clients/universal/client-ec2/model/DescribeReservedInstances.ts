import { DescribeReservedInstancesInput } from "./DescribeReservedInstancesInput";
import { DescribeReservedInstancesOutput } from "./DescribeReservedInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReservedInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReservedInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReservedInstancesInput
  },
  output: {
    shape: DescribeReservedInstancesOutput
  },
  errors: []
};
