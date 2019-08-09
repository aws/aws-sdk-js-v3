import { Structure as _Structure_ } from "@aws-sdk/types";

export const _XssMatchSetSummary: _Structure_ = {
  type: "structure",
  required: ["XssMatchSetId", "Name"],
  members: {
    XssMatchSetId: {
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
