import { _InviteList } from "./_InviteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const InviteUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Invites: {
      shape: _InviteList
    }
  }
};
