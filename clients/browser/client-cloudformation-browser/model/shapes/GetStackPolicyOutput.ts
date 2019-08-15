import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetStackPolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackPolicyBody: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
