import { _ReplicaConfigurationList } from "./_ReplicaConfigurationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const IncreaseReplicaCountInput: _Structure_ = {
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
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
