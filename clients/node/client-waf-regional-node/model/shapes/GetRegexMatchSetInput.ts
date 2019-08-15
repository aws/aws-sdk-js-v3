import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRegexMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexMatchSetId"],
  members: {
    RegexMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
