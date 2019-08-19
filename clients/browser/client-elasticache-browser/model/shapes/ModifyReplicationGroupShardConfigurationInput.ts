import { _ReshardingConfigurationList } from "./_ReshardingConfigurationList";
import { _NodeGroupsToRemoveList } from "./_NodeGroupsToRemoveList";
import { _NodeGroupsToRetainList } from "./_NodeGroupsToRetainList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyReplicationGroupShardConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationGroupId", "NodeGroupCount", "ApplyImmediately"],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    NodeGroupCount: {
      shape: {
        type: "integer"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    },
    ReshardingConfiguration: {
      shape: _ReshardingConfigurationList
    },
    NodeGroupsToRemove: {
      shape: _NodeGroupsToRemoveList
    },
    NodeGroupsToRetain: {
      shape: _NodeGroupsToRetainList
    }
  }
};
