import { _ReplicationInstanceTaskLogsList } from "./_ReplicationInstanceTaskLogsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationInstanceTaskLogsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationInstanceArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceTaskLogs: {
      shape: _ReplicationInstanceTaskLogsList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
