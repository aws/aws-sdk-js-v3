import { _ReshardingStatus } from "./_ReshardingStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReplicationGroupPendingModifiedValues: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PrimaryClusterId: {
      shape: {
        type: "string"
      }
    },
    AutomaticFailoverStatus: {
      shape: {
        type: "string"
      }
    },
    Resharding: {
      shape: _ReshardingStatus
    }
  }
};
