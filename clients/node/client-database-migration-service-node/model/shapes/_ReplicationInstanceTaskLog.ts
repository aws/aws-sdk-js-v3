import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationInstanceTaskLog: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTaskName: {
      shape: {
        type: "string"
      }
    },
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstanceTaskLogSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
