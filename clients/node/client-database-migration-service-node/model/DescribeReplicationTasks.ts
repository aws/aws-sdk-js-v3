import { DescribeReplicationTasksInput } from "./DescribeReplicationTasksInput";
import { DescribeReplicationTasksOutput } from "./DescribeReplicationTasksOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeReplicationTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationTasksInput
  },
  output: {
    shape: DescribeReplicationTasksOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
