import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRegexPatternSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexPatternSetId", "ChangeToken"],
  members: {
    RegexPatternSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
