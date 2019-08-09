import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomerManagedDatastoreS3Storage: _Structure_ = {
  type: "structure",
  required: ["bucket", "roleArn"],
  members: {
    bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    keyPrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
