import { DescribeOrderableReplicationInstancesInput } from "../shapes/DescribeOrderableReplicationInstancesInput";
import { DescribeOrderableReplicationInstancesOutput } from "../shapes/DescribeOrderableReplicationInstancesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOrderableReplicationInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOrderableReplicationInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeOrderableReplicationInstancesInput
  },
  output: {
    shape: DescribeOrderableReplicationInstancesOutput
  },
  errors: []
};
