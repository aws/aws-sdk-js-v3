import { _DocumentVersionMetadata } from "./_DocumentVersionMetadata";
import { _SharedLabels } from "./_SharedLabels";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DocumentMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
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
    LatestVersionMetadata: {
      shape: _DocumentVersionMetadata
    },
    ResourceState: {
      shape: {
        type: "string"
      }
    },
    Labels: {
      shape: _SharedLabels
    }
  }
};
