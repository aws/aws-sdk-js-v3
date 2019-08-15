import { _UserSummaryList } from "./_UserSummaryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserSummaryList: {
      shape: _UserSummaryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
