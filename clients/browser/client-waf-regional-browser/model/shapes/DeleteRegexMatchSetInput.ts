import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRegexMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["RegexMatchSetId", "ChangeToken"],
  members: {
    RegexMatchSetId: {
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
