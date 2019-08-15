import { _UpgradeHistoryList } from "./_UpgradeHistoryList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUpgradeHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UpgradeHistories: {
      shape: _UpgradeHistoryList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
