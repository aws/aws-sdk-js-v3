import { _ResourceCounts } from "./_ResourceCounts";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiscoveredResourceCountsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    totalDiscoveredResources: {
      shape: {
        type: "integer"
      }
    },
    resourceCounts: {
      shape: _ResourceCounts
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
