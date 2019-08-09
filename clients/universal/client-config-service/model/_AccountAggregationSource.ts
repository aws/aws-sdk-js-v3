import { _AccountAggregationSourceAccountList } from "./_AccountAggregationSourceAccountList";
import { _AggregatorRegionList } from "./_AggregatorRegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountAggregationSource: _Structure_ = {
  type: "structure",
  required: ["AccountIds"],
  members: {
    AccountIds: {
      shape: _AccountAggregationSourceAccountList
    },
    AllAwsRegions: {
      shape: {
        type: "boolean"
      }
    },
    AwsRegions: {
      shape: _AggregatorRegionList
    }
  }
};
