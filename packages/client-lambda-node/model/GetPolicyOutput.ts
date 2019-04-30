import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policy: {
      shape: {
        type: "string"
      }
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    }
  }
};
