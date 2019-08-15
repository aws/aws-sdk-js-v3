import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsBlockDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    VolumeSize: {
      shape: {
        type: "integer"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      }
    }
  }
};
