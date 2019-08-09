import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeletePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyId"],
  members: {
    PolicyId: {
      shape: {
        type: "string"
      }
    }
  }
};
