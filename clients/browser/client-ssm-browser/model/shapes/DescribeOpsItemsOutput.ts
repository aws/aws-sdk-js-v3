import { _OpsItemSummaries } from "./_OpsItemSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOpsItemsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    OpsItemSummaries: {
      shape: _OpsItemSummaries
    }
  }
};
