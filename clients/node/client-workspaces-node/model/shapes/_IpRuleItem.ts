import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IpRuleItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ipRule: {
      shape: {
        type: "string"
      }
    },
    ruleDesc: {
      shape: {
        type: "string"
      }
    }
  }
};
