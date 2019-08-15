import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EffectivePolicy: _Structure_ = {
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
    },
    policyDocument: {
      shape: {
        type: "string"
      }
    }
  }
};
