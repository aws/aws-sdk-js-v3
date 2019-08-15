import { _UserBucketDetails } from "./_UserBucketDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DeviceName: {
      shape: {
        type: "string"
      },
      locationName: "deviceName"
    },
    DiskImageSize: {
      shape: {
        type: "float"
      },
      locationName: "diskImageSize"
    },
    Format: {
      shape: {
        type: "string"
      },
      locationName: "format"
    },
    Progress: {
      shape: {
        type: "string"
      },
      locationName: "progress"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StatusMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    },
    UserBucket: {
      shape: _UserBucketDetails,
      locationName: "userBucket"
    }
  }
};
