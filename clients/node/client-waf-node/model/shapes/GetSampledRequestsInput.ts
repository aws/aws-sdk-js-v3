import { _TimeWindow } from "./_TimeWindow";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSampledRequestsInput: _Structure_ = {
  type: "structure",
  required: ["WebAclId", "RuleId", "TimeWindow", "MaxItems"],
  members: {
    WebAclId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RuleId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TimeWindow: {
      shape: _TimeWindow
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
