import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopReplicationTaskInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationTaskArn"],
  members: {
    ReplicationTaskArn: {
      shape: {
        type: "string"
      }
    }
  }
};
