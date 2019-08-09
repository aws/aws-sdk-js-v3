import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Encryption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Mode: {
      shape: {
        type: "string"
      }
    },
    Key: {
      shape: {
        type: "string"
      }
    },
    KeyMd5: {
      shape: {
        type: "string"
      }
    },
    InitializationVector: {
      shape: {
        type: "string"
      }
    }
  }
};
