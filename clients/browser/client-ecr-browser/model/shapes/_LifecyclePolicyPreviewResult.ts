import { _ImageTagList } from "./_ImageTagList";
import { _LifecyclePolicyRuleAction } from "./_LifecyclePolicyRuleAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LifecyclePolicyPreviewResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    imageTags: {
      shape: _ImageTagList
    },
    imageDigest: {
      shape: {
        type: "string"
      }
    },
    imagePushedAt: {
      shape: {
        type: "timestamp"
      }
    },
    action: {
      shape: _LifecyclePolicyRuleAction
    },
    appliedRulePriority: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
