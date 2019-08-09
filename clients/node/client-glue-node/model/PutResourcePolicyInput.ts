import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutResourcePolicyInput: _Structure_ = {
  type: "structure",
  required: ["PolicyInJson"],
  members: {
    PolicyInJson: {
      shape: {
        type: "string",
        min: 2
      }
    },
    PolicyHashCondition: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyExistsCondition: {
      shape: {
        type: "string"
      }
    }
  }
};
