import { _MemberSummaryList } from "./_MemberSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMembersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Members: {
      shape: _MemberSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
