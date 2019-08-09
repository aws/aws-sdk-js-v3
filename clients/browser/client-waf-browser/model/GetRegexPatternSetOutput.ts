import { _RegexPatternSet } from "./_RegexPatternSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegexPatternSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegexPatternSet: {
      shape: _RegexPatternSet
    }
  }
};
