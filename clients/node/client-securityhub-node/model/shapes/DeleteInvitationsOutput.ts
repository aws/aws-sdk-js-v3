import { _ResultList } from "./_ResultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteInvitationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UnprocessedAccounts: {
      shape: _ResultList
    }
  }
};
