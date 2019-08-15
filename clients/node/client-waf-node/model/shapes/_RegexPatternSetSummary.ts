import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexPatternSetSummary: _Structure_ = {
  type: "structure",
  required: ["RegexPatternSetId", "Name"],
  members: {
    RegexPatternSetId: {
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
    }
  }
};
