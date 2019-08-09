import { _XssMatchTuples } from "./_XssMatchTuples";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _XssMatchSet: _Structure_ = {
  type: "structure",
  required: ["XssMatchSetId", "XssMatchTuples"],
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
    },
    XssMatchTuples: {
      shape: _XssMatchTuples
    }
  }
};
