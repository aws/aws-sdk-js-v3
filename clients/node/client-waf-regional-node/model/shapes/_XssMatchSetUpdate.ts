import { _XssMatchTuple } from "./_XssMatchTuple";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _XssMatchSetUpdate: _Structure_ = {
  type: "structure",
  required: ["Action", "XssMatchTuple"],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    XssMatchTuple: {
      shape: _XssMatchTuple
    }
  }
};
