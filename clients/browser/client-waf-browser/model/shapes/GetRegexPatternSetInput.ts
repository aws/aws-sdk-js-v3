import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegexPatternSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexPatternSetId"],
  members: {
    RegexPatternSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
