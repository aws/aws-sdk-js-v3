import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _DiskList } from "./_DiskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    state: {
      shape: {
        type: "string"
      }
    },
    progress: {
      shape: {
        type: "string"
      }
    },
    fromAttachedDisks: {
      shape: _DiskList
    },
    fromInstanceName: {
      shape: {
        type: "string"
      }
    },
    fromInstanceArn: {
      shape: {
        type: "string"
      }
    },
    fromBlueprintId: {
      shape: {
        type: "string"
      }
    },
    fromBundleId: {
      shape: {
        type: "string"
      }
    },
    sizeInGb: {
      shape: {
        type: "integer"
      }
    }
  }
};
