import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ServiceSetting: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SettingId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SettingValue: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedUser: {
      shape: {
        type: "string"
      }
    },
    ARN: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
