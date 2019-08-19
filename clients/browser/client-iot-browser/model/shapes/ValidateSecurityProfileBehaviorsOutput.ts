import { _ValidationErrors } from "./_ValidationErrors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateSecurityProfileBehaviorsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    valid: {
      shape: {
        type: "boolean"
      }
    },
    validationErrors: {
      shape: _ValidationErrors
    }
  }
};
