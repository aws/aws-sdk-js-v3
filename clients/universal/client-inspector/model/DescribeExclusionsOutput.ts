import { _ExclusionMap } from "./_ExclusionMap";
import { _FailedItems } from "./_FailedItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExclusionsOutput: _Structure_ = {
  type: "structure",
  required: ["exclusions", "failedItems"],
  members: {
    exclusions: {
      shape: _ExclusionMap
    },
    failedItems: {
      shape: _FailedItems
    }
  }
};
