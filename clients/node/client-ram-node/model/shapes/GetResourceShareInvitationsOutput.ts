import { _ResourceShareInvitationList } from "./_ResourceShareInvitationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceShareInvitationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareInvitations: {
      shape: _ResourceShareInvitationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
