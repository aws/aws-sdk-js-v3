import { _UnprocessedAccounts } from "./_UnprocessedAccounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartMonitoringMembersOutput: _Structure_ = {
  type: "structure",
  required: ["UnprocessedAccounts"],
  members: {
    UnprocessedAccounts: {
      shape: _UnprocessedAccounts,
      locationName: "unprocessedAccounts"
    }
  }
};
