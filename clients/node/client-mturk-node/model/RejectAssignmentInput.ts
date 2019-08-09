import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectAssignmentInput: _Structure_ = {
  type: "structure",
  required: ["AssignmentId", "RequesterFeedback"],
  members: {
    AssignmentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RequesterFeedback: {
      shape: {
        type: "string"
      }
    }
  }
};
