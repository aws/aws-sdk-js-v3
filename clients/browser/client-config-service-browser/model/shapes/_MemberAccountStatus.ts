import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberAccountStatus: _Structure_ = {
  type: "structure",
  required: ["AccountId", "ConfigRuleName", "MemberAccountRuleStatus"],
  members: {
    AccountId: {
      shape: {
        type: "string"
      }
    },
    ConfigRuleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MemberAccountRuleStatus: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    },
    LastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
