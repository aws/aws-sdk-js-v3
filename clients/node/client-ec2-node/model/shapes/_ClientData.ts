import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClientData: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Comment: {
      shape: {
        type: "string"
      }
    },
    UploadEnd: {
      shape: {
        type: "timestamp"
      }
    },
    UploadSize: {
      shape: {
        type: "float"
      }
    },
    UploadStart: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
