import { _InvitationList } from "./_InvitationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListInvitationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Invitations: {
      shape: _InvitationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
