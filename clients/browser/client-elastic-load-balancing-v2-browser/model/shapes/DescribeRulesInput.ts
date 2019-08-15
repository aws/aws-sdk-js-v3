import { _RuleArns } from "./_RuleArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ListenerArn: {
      shape: {
        type: "string"
      }
    },
    RuleArns: {
      shape: _RuleArns
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
