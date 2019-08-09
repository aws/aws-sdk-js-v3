import { _FindingList } from "./_FindingList";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFindingsOutput: _Structure_ = {
  type: "structure",
  required: ["findings", "failedItems"],
  members: {
    findings: {
      shape: _FindingList
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
