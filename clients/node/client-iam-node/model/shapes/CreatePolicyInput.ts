import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyName", "PolicyDocument"],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
