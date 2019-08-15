import { _MemberList } from "./_MemberList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMembersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Members: {
      shape: _MemberList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
