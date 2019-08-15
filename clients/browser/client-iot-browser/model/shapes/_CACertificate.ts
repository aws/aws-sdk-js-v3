import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CACertificate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    certificateArn: {
      shape: {
        type: "string"
      }
    },
    certificateId: {
      shape: {
        type: "string",
        min: 64
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
