import { _PolicySummary } from "./_PolicySummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Policy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicySummary: {
      shape: _PolicySummary
    },
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
