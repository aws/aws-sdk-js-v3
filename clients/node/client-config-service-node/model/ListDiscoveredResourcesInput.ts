import { _ResourceIdList } from "./_ResourceIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDiscoveredResourcesInput: _Structure_ = {
  type: "structure",
  required: ["resourceType"],
  members: {
    resourceType: {
      shape: {
        type: "string"
      }
    },
    resourceIds: {
      shape: _ResourceIdList
    },
    resourceName: {
      shape: {
        type: "string"
      }
    },
    limit: {
      shape: {
        type: "integer"
      }
    },
    includeDeletedResources: {
      shape: {
        type: "boolean"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
