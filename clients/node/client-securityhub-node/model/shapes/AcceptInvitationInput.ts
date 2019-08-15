import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptInvitationInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MasterId: {
      shape: {
        type: "string"
      }
    },
    InvitationId: {
      shape: {
        type: "string"
      }
    }
  }
};
