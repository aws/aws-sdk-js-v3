import { DescribeReplicationInstanceTaskLogsInput } from "./DescribeReplicationInstanceTaskLogsInput";
import { DescribeReplicationInstanceTaskLogsOutput } from "./DescribeReplicationInstanceTaskLogsOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidResourceStateFault } from "./InvalidResourceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
