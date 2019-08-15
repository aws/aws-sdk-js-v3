import { _ResourceFilters } from "./_ResourceFilters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAggregateDiscoveredResourcesInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName", "ResourceType"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _ResourceFilters
    },
    Limit: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
