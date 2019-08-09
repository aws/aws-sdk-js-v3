import { _RegexPatternStrings } from "./_RegexPatternStrings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexPatternSet: _Structure_ = {
  type: "structure",
  required: ["RegexPatternSetId", "RegexPatternStrings"],
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
    },
    RegexPatternStrings: {
      shape: _RegexPatternStrings
    }
  }
};
