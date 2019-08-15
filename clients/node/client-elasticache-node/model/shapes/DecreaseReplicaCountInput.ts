import { _ReplicaConfigurationList } from "./_ReplicaConfigurationList";
import { _RemoveReplicasList } from "./_RemoveReplicasList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DecreaseReplicaCountInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId", "ApplyImmediately"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    NewReplicaCount: {
      shape: {
        type: "integer"
      }
    },
    ReplicaConfiguration: {
      shape: _ReplicaConfigurationList
    },
    ReplicasToRemove: {
      shape: _RemoveReplicasList
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
