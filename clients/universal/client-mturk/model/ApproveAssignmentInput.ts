import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApproveAssignmentInput: _Structure_ = {
  type: "structure",
  required: ["AssignmentId"],
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
    },
    OverrideRejection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
