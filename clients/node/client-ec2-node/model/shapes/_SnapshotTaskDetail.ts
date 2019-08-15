import { _UserBucketDetails } from "./_UserBucketDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotTaskDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    DiskImageSize: {
      shape: {
        type: "float"
      },
      locationName: "diskImageSize"
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    Format: {
      shape: {
        type: "string"
      },
      locationName: "format"
    },
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
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
