import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AggregateResourceIdentifier: _Structure_ = {
  type: "structure",
  required: ["SourceAccountId", "SourceRegion", "ResourceId", "ResourceType"],
  members: {
    SourceAccountId: {
      shape: {
        type: "string"
      }
    },
    SourceRegion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceId: {
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
    ResourceName: {
      shape: {
        type: "string"
      }
    }
  }
};
