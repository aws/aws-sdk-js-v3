import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePolicyVersionInput: _Structure_ = {
  type: "structure",
  required: ["PolicyArn", "PolicyDocument"],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SetAsDefault: {
      shape: {
        type: "boolean"
      }
    }
  }
};
