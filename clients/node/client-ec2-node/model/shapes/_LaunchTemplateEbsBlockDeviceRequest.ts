import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateEbsBlockDeviceRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
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
    }
  }
};
