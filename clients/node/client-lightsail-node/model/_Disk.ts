import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Disk: _Structure_ = {
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
    isSystemDisk: {
      shape: {
        type: "boolean"
      }
    },
    iops: {
      shape: {
        type: "integer"
      }
    },
    path: {
      shape: {
        type: "string"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    attachedTo: {
      shape: {
        type: "string"
      }
    },
    isAttached: {
      shape: {
        type: "boolean"
      }
    },
    attachmentState: {
      shape: {
        type: "string"
      }
    },
    gbInUse: {
      shape: {
        type: "integer"
      }
    }
  }
};
