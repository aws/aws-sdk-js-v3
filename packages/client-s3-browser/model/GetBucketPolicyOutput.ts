import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Policy: {
      shape: {
        type: "string"
      }
    }
  },
  payload: "Policy"
};
