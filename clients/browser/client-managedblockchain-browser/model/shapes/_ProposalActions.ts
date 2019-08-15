import { _InviteActionList } from "./_InviteActionList";
import { _RemoveActionList } from "./_RemoveActionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProposalActions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Invitations: {
      shape: _InviteActionList
    },
    Removals: {
      shape: _RemoveActionList
    }
  }
};
