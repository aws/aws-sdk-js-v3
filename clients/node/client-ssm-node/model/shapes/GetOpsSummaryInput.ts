import { _OpsFilterList } from "./_OpsFilterList";
import { _OpsAggregatorList } from "./_OpsAggregatorList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetOpsSummaryInput: _Structure_ = {
  type: "structure",
  required: ["Aggregators"],
  members: {
    Filters: {
      shape: _OpsFilterList
    },
    Aggregators: {
      shape: _OpsAggregatorList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
