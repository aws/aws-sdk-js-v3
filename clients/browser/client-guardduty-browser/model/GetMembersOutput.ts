import { _Members } from "./_Members";
import { _UnprocessedAccounts } from "./_UnprocessedAccounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMembersOutput: _Structure_ = {
  type: "structure",
  required: ["Members", "UnprocessedAccounts"],
  members: {
    Members: {
      shape: _Members,
      locationName: "members"
    },
    UnprocessedAccounts: {
      shape: _UnprocessedAccounts,
      locationName: "unprocessedAccounts"
    }
  }
};
