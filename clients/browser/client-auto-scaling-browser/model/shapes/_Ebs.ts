import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ebs: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VolumeSize: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    VolumeType: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      }
    },
    Iops: {
      shape: {
        type: "integer",
        min: 100
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
