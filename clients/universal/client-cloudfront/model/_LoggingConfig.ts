import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoggingConfig: _Structure_ = {
  type: "structure",
  required: ["Enabled", "IncludeCookies", "Bucket", "Prefix"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    IncludeCookies: {
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
