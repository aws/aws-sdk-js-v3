import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSettingsResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    SettingsGroup: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
