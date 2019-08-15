import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteUserInput: _Structure_ = {
  type: "structure",
  required: ["EnrollmentId"],
  members: {
    UserArn: {
      shape: {
        type: "string"
      }
    },
    EnrollmentId: {
      shape: {
        type: "string"
      }
    }
  }
};
