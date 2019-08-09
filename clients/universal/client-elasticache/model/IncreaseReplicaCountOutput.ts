import { _ReplicationGroup } from "./_ReplicationGroup";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IncreaseReplicaCountOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroup: {
      shape: _ReplicationGroup
    }
  }
};
