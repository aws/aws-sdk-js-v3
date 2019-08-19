import { _ManagedActionHistoryItems } from "./_ManagedActionHistoryItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentManagedActionHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ManagedActionHistoryItems: {
      shape: _ManagedActionHistoryItems
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
