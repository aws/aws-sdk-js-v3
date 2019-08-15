import { DescribeReplicationInstanceTaskLogsInput } from "../shapes/DescribeReplicationInstanceTaskLogsInput";
import { DescribeReplicationInstanceTaskLogsOutput } from "../shapes/DescribeReplicationInstanceTaskLogsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { InvalidResourceStateFault } from "../shapes/InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeReplicationInstanceTaskLogs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeReplicationInstanceTaskLogs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeReplicationInstanceTaskLogsInput
  },
  output: {
    shape: DescribeReplicationInstanceTaskLogsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidResourceStateFault
    }
  ]
};
