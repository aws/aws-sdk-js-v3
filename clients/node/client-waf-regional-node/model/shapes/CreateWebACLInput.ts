import { _WafAction } from "./_WafAction";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateWebACLInput: _Structure_ = {
  type: "structure",
  required: ["Name", "MetricName", "DefaultAction", "ChangeToken"],
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
    DefaultAction: {
      shape: _WafAction
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
