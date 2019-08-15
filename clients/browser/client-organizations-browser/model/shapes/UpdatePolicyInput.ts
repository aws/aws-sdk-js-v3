import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId"],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
