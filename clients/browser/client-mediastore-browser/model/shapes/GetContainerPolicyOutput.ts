import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetContainerPolicyOutput: _Structure_ = {
  type: "structure",
  required: ["Policy"],
  members: {
    Policy: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
