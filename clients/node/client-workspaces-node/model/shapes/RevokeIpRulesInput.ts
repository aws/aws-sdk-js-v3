import { _IpRevokedRuleList } from "./_IpRevokedRuleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeIpRulesInput: _Structure_ = {
  type: "structure",
  required: ["GroupId", "UserRules"],
  members: {
    GroupId: {
      shape: {
        type: "string"
      }
    },
    UserRules: {
      shape: _IpRevokedRuleList
    }
  }
};
