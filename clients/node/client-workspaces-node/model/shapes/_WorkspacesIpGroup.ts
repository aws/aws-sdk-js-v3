import { _IpRuleList } from "./_IpRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspacesIpGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    groupId: {
      shape: {
        type: "string"
      }
    },
    groupName: {
      shape: {
        type: "string"
      }
    },
    groupDesc: {
      shape: {
        type: "string"
      }
    },
    userRules: {
      shape: _IpRuleList
    }
  }
};
