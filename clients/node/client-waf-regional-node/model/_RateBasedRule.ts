import { _Predicates } from "./_Predicates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RateBasedRule: _Structure_ = {
  type: "structure",
  required: ["RuleId", "MatchPredicates", "RateKey", "RateLimit"],
  members: {
    RuleId: {
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
    MatchPredicates: {
      shape: _Predicates
    },
    RateKey: {
      shape: {
        type: "string"
      }
    },
    RateLimit: {
      shape: {
        type: "integer",
        min: 2000
      }
    }
  }
};
