import { _ResourceDataSyncS3Destination } from "./_ResourceDataSyncS3Destination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateResourceDataSyncInput: _Structure_ = {
  type: "structure",
  required: ["SyncName", "S3Destination"],
  members: {
    SyncName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3Destination: {
      shape: _ResourceDataSyncS3Destination
    }
  }
};
