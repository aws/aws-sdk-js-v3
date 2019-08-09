import { _XssMatchSetUpdates } from "./_XssMatchSetUpdates";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateXssMatchSetInput: _Structure_ = {
  type: "structure",
  required: ["XssMatchSetId", "ChangeToken", "Updates"],
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
    },
    Updates: {
      shape: _XssMatchSetUpdates
    }
  }
};
