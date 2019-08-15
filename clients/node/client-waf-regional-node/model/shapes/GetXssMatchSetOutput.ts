import { _XssMatchSet } from "./_XssMatchSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetXssMatchSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    XssMatchSet: {
      shape: _XssMatchSet
    }
  }
};
