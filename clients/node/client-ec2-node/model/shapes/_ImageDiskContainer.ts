import { _UserBucket } from "./_UserBucket";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ImageDiskContainer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    DeviceName: {
      shape: {
        type: "string"
      }
    },
    Format: {
      shape: {
        type: "string"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    Url: {
      shape: {
        type: "string"
      }
    },
    UserBucket: {
      shape: _UserBucket
    }
  }
};
