import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTrafficPolicyCommentInput: _Structure_ = {
  type: "structure",
  required: ["Id", "Version", "Comment"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Id"
    },
    Version: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "uri",
      locationName: "Version"
    },
    Comment: {
      shape: {
        type: "string"
      }
    }
  }
};
