import { _Group } from "./_Group";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Group: {
      shape: _Group
    },
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
