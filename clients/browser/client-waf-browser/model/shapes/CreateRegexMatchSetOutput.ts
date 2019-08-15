import { _RegexMatchSet } from "./_RegexMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateRegexMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegexMatchSet: {
      shape: _RegexMatchSet
    },
    ChangeToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
