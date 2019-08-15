import { _DiscoveredResourceIdentifierList } from "./_DiscoveredResourceIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAggregateDiscoveredResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceIdentifiers: {
      shape: _DiscoveredResourceIdentifierList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
