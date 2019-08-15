import { _NodeGroupMemberUpdateStatusList } from "./_NodeGroupMemberUpdateStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NodeGroupUpdateStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeGroupId: {
      shape: {
        type: "string"
      }
    },
    NodeGroupMemberUpdateStatus: {
      shape: _NodeGroupMemberUpdateStatusList
    }
  }
};
