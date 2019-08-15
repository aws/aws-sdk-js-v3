import { _ResourceTypes } from "./_ResourceTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiscoveredResourceCountsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceTypes: {
      shape: _ResourceTypes
    },
    limit: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
