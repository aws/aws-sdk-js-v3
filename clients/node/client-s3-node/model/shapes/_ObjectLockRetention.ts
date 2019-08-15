import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ObjectLockRetention: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Mode: {
      shape: {
        type: "string"
      }
    },
    RetainUntilDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    }
  }
};
