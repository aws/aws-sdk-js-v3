import { _SharedLabels } from "./_SharedLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FolderMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatorId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParentFolderId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ModifiedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ResourceState: {
      shape: {
        type: "string"
      }
    },
    Signature: {
      shape: {
        type: "string"
      }
    },
    Labels: {
      shape: _SharedLabels
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    LatestVersionSize: {
      shape: {
        type: "integer"
      }
    }
  }
};
