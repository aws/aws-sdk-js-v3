import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttachedPolicy: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
