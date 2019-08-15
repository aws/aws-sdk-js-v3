import { _DiskAttributeList } from "./_DiskAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Disk: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DiskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DiskPath: {
      shape: {
        type: "string"
      }
    },
    DiskNode: {
      shape: {
        type: "string"
      }
    },
    DiskStatus: {
      shape: {
        type: "string"
      }
    },
    DiskSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    DiskAllocationType: {
      shape: {
        type: "string",
        min: 3
      }
    },
    DiskAllocationResource: {
      shape: {
        type: "string"
      }
    },
    DiskAttributeList: {
      shape: _DiskAttributeList
    }
  }
};
