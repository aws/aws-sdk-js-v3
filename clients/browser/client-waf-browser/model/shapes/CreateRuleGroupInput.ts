import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRuleGroupInput: _Structure_ = {
  type: "structure",
  required: ["Name", "MetricName", "ChangeToken"],
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
