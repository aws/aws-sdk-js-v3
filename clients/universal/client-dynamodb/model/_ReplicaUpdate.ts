import { _CreateReplicaAction } from "./_CreateReplicaAction";
import { _DeleteReplicaAction } from "./_DeleteReplicaAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicaUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Create: {
      shape: _CreateReplicaAction
    },
    Delete: {
      shape: _DeleteReplicaAction
    }
  }
};
