import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ExportToS3Task: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ContainerFormat: {
      shape: {
        type: "string"
      },
      locationName: "containerFormat"
    },
    DiskImageFormat: {
      shape: {
        type: "string"
      },
      locationName: "diskImageFormat"
    },
    S3Bucket: {
      shape: {
        type: "string"
      },
      locationName: "s3Bucket"
    },
    S3Key: {
      shape: {
        type: "string"
      },
      locationName: "s3Key"
    }
  }
};
