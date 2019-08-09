import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeModification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    ModificationState: {
      shape: {
        type: "string"
      },
      locationName: "modificationState"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    TargetSize: {
      shape: {
        type: "integer"
      },
      locationName: "targetSize"
    },
    TargetIops: {
      shape: {
        type: "integer"
      },
      locationName: "targetIops"
    },
    TargetVolumeType: {
      shape: {
        type: "string"
      },
      locationName: "targetVolumeType"
    },
    OriginalSize: {
      shape: {
        type: "integer"
      },
      locationName: "originalSize"
    },
    OriginalIops: {
      shape: {
        type: "integer"
      },
      locationName: "originalIops"
    },
    OriginalVolumeType: {
      shape: {
        type: "string"
      },
      locationName: "originalVolumeType"
    },
    Progress: {
      shape: {
        type: "integer"
      },
      locationName: "progress"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    },
    EndTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "endTime"
    }
  }
};
