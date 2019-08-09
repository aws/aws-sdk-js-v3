import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeConfiguration: _Structure_ = {
  type: "structure",
  required: ["MountPoint", "NumberOfDisks", "Size"],
  members: {
    MountPoint: {
      shape: {
        type: "string"
      }
    },
    RaidLevel: {
      shape: {
        type: "integer"
      }
    },
    NumberOfDisks: {
      shape: {
        type: "integer"
      }
    },
    Size: {
      shape: {
        type: "integer"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    }
  }
};
