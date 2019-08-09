import { DescribeReplicationInstancesInput } from "./DescribeReplicationInstancesInput";
import { DescribeReplicationInstancesOutput } from "./DescribeReplicationInstancesOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReplicationInstances: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationInstances",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationInstancesInput
  },
  output: {
    shape: DescribeReplicationInstancesOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
