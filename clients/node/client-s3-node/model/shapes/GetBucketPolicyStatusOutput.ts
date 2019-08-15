import { _PolicyStatus } from "./_PolicyStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBucketPolicyStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyStatus: {
      shape: _PolicyStatus
    }
  },
  payload: "PolicyStatus"
};
