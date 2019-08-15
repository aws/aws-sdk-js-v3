import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequestId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "integer"
      },
      location: "statusCode"
    }
  }
};
