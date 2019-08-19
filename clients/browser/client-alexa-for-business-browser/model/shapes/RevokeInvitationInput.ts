import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeInvitationInput: _Structure_ = {
  type: "structure",
  required: [],
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
