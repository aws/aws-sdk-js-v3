import { _ReplicationTask } from "./_ReplicationTask";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReplicationTaskOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTask: {
      shape: _ReplicationTask
    }
  }
};
