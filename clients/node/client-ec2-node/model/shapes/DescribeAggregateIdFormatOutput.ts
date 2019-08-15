import { _IdFormatList } from "./_IdFormatList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAggregateIdFormatOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UseLongIdsAggregated: {
      shape: {
        type: "boolean"
      },
      locationName: "useLongIdsAggregated"
    },
    Statuses: {
      shape: _IdFormatList,
      locationName: "statusSet"
    }
  }
};
