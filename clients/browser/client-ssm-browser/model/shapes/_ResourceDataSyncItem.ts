import { _ResourceDataSyncS3Destination } from "./_ResourceDataSyncS3Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceDataSyncItem: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SyncName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3Destination: {
      shape: _ResourceDataSyncS3Destination
    },
    LastSyncTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastSuccessfulSyncTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastStatus: {
      shape: {
        type: "string"
      }
    },
    SyncCreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastSyncStatusMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
