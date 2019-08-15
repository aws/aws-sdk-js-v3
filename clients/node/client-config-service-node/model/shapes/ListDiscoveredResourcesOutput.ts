import { _ResourceIdentifierList } from "./_ResourceIdentifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDiscoveredResourcesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceIdentifiers: {
      shape: _ResourceIdentifierList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
