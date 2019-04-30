import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateFunctionCodeInput: _Structure_ = {
  type: "structure",
  required: ["FunctionName"],
  members: {
    FunctionName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "FunctionName"
    },
    ZipFile: {
      shape: {
        type: "blob",
        sensitive: true
      }
    },
    S3Bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    S3Key: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3ObjectVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Publish: {
      shape: {
        type: "boolean"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    RevisionId: {
      shape: {
        type: "string"
      }
    }
  }
};
