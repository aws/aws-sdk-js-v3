import { _ResourcePolicy } from "./_ResourcePolicy";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResourcePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourcePolicy: {
      shape: _ResourcePolicy
    }
  }
};
