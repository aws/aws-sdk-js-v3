import { _GroupedResourceCountList } from "./_GroupedResourceCountList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetAggregateDiscoveredResourceCountsOutput: _Structure_ = {
  type: "structure",
  required: ["TotalDiscoveredResources"],
  members: {
    TotalDiscoveredResources: {
      shape: {
        type: "integer"
      }
    },
    GroupByKey: {
      shape: {
        type: "string",
        min: 1
      }
    },
    GroupedResourceCounts: {
      shape: _GroupedResourceCountList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
