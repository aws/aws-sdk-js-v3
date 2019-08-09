import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPolicyVersionsInput: _Structure_ = {
  type: "structure",
  required: ["PolicyArn"],
  members: {
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Marker: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
