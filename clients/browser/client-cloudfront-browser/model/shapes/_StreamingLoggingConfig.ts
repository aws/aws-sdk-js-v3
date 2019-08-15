import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamingLoggingConfig: _Structure_ = {
  type: "structure",
  required: ["Enabled", "Bucket", "Prefix"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Bucket: {
      shape: {
        type: "string"
      }
    },
    Prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
