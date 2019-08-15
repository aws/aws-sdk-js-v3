import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetXssMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["XssMatchSetId"],
  members: {
    XssMatchSetId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
