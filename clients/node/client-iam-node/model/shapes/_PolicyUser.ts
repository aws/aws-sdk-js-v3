import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyUser: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserId: {
      shape: {
        type: "string",
        min: 16
      }
    }
  }
};
