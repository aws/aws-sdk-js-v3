import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourcePolicyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyInJson: {
      shape: {
        type: "string",
        min: 2
      }
    },
    PolicyHash: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      }
    },
    UpdateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
