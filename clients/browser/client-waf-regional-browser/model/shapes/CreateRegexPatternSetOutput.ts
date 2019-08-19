import { _RegexPatternSet } from "./_RegexPatternSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRegexPatternSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegexPatternSet: {
      shape: _RegexPatternSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
