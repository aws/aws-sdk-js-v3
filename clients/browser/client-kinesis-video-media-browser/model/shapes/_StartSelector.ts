import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StartSelector: _Structure_ = {
  type: "structure",
  required: ["StartSelectorType"],
  members: {
    StartSelectorType: {
      shape: {
        type: "string"
      }
    },
    AfterFragmentNumber: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StartTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ContinuationToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
