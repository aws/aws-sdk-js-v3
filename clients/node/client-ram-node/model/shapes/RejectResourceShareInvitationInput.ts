import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectResourceShareInvitationInput: _Structure_ = {
  type: "structure",
  required: ["resourceShareInvitationArn"],
  members: {
    resourceShareInvitationArn: {
      shape: {
        type: "string"
      }
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
