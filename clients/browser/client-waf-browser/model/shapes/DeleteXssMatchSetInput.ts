import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteXssMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["XssMatchSetId", "ChangeToken"],
  members: {
    XssMatchSetId: {
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
