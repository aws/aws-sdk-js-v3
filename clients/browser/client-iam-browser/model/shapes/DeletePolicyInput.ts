import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyArn"],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
