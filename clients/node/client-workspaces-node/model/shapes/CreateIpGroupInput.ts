import { _IpRuleList } from "./_IpRuleList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateIpGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupName"],
  members: {
    GroupName: {
      shape: {
        type: "string"
      }
    },
    GroupDesc: {
      shape: {
        type: "string"
      }
    },
    UserRules: {
      shape: _IpRuleList
    },
    Tags: {
      shape: _TagList
    }
  }
};
