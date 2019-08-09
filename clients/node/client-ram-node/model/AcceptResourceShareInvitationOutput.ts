import { _ResourceShareInvitation } from "./_ResourceShareInvitation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptResourceShareInvitationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareInvitation: {
      shape: _ResourceShareInvitation
    },
    clientToken: {
      shape: {
        type: "string"
      }
    }
  }
};
