import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRateBasedRuleInput: _Structure_ = {
  type: "structure",
  required: ["Name", "MetricName", "RateKey", "RateLimit", "ChangeToken"],
  members: {
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
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
