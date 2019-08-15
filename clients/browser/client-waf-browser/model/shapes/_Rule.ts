import { _Predicates } from "./_Predicates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Rule: _Structure_ = {
  type: "structure",
  required: ["RuleId", "Predicates"],
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
    Predicates: {
      shape: _Predicates
    }
  }
};
