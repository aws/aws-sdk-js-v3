import { _IpRuleList } from "./_IpRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateRulesOfIpGroupInput: _Structure_ = {
  type: "structure",
  required: ["GroupId", "UserRules"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      }
    },
    UserRules: {
      shape: _IpRuleList
    }
  }
};
