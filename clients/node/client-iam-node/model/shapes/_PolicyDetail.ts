import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PolicyDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PolicyName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyDocument: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
