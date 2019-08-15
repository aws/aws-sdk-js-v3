import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Policy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    policyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    policyArn: {
      shape: {
        type: "string"
      }
    }
  }
};
