import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BuildNotDeleted: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    statusCode: {
      shape: {
        type: "string"
      }
    }
  }
};
