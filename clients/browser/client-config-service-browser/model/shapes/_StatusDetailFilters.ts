import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StatusDetailFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    MemberAccountRuleStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
