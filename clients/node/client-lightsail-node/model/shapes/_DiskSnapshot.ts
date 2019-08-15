import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DiskSnapshot: _Structure_ = {
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
    sizeInGb: {
      shape: {
        type: "integer"
      }
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
    fromDiskName: {
      shape: {
        type: "string"
      }
    },
    fromDiskArn: {
      shape: {
        type: "string"
      }
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
    }
  }
};
