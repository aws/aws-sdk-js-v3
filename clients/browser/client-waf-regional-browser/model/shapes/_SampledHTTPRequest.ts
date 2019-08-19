import { _HTTPRequest } from "./_HTTPRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SampledHTTPRequest: _Structure_ = {
  type: "structure",
  required: ["Request", "Weight"],
  members: {
    Request: {
      shape: _HTTPRequest
    },
    Weight: {
      shape: {
        type: "integer"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Action: {
      shape: {
        type: "string"
      }
    },
    RuleWithinRuleGroup: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
