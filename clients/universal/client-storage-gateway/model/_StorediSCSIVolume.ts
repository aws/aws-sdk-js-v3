import { _VolumeiSCSIAttributes } from "./_VolumeiSCSIAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorediSCSIVolume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    VolumeType: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeAttachmentStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    VolumeProgress: {
      shape: {
        type: "float"
      }
    },
    VolumeDiskId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SourceSnapshotId: {
      shape: {
        type: "string"
      }
    },
    PreservedExistingData: {
      shape: {
        type: "boolean"
      }
    },
    VolumeiSCSIAttributes: {
      shape: _VolumeiSCSIAttributes
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    VolumeUsedInBytes: {
      shape: {
        type: "integer"
      }
    },
    KMSKey: {
      shape: {
        type: "string",
        min: 7
      }
    },
    TargetName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
