import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubscribedRuleGroupSummary: _Structure_ = {
  type: "structure",
  required: ["RuleGroupId", "Name", "MetricName"],
  members: {
    RuleGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MetricName: {
      shape: {
        type: "string"
      }
    }
  }
};
