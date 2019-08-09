import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupId: {
      shape: {
        type: "string",
        min: 16
      }
    }
  }
};
