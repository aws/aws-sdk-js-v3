import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceDataSyncS3Destination: _Structure_ = {
  type: "structure",
  required: ["BucketName", "SyncFormat", "Region"],
  members: {
    BucketName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Prefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SyncFormat: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AWSKMSKeyARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
