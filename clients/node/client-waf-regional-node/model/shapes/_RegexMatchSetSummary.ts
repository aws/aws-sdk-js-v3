import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RegexMatchSetSummary: _Structure_ = {
  type: "structure",
  required: ["RegexMatchSetId", "Name"],
  members: {
    RegexMatchSetId: {
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
