import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetFileUploadURLInput: _Structure_ = {
  type: "structure",
  required: ["AssignmentId", "QuestionIdentifier"],
  members: {
    AssignmentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    QuestionIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
