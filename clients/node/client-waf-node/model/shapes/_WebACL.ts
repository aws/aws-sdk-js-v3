import { _WafAction } from "./_WafAction";
import { _ActivatedRules } from "./_ActivatedRules";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebACL: _Structure_ = {
  type: "structure",
  required: ["WebACLId", "DefaultAction", "Rules"],
  members: {
    WebACLId: {
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
    },
    DefaultAction: {
      shape: _WafAction
    },
    Rules: {
      shape: _ActivatedRules
    },
    WebACLArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
