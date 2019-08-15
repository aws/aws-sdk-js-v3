import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteResourcePolicyInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyHashCondition: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
