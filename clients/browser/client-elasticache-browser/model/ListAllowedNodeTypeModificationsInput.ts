import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAllowedNodeTypeModificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CacheClusterId: {
      shape: {
        type: "string"
      }
    },
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    }
  }
};
