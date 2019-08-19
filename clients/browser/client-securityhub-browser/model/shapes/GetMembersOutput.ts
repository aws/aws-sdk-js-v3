import { _MemberList } from "./_MemberList";
import { _ResultList } from "./_ResultList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMembersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Members: {
      shape: _MemberList
    },
    UnprocessedAccounts: {
      shape: _ResultList
    }
  }
};
