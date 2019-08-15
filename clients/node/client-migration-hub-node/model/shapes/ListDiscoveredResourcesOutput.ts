import { _DiscoveredResourceList } from "./_DiscoveredResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDiscoveredResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    DiscoveredResourceList: {
      shape: _DiscoveredResourceList
    }
  }
};
