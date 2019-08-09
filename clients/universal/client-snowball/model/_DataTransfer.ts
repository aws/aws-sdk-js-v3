import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataTransfer: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BytesTransferred: {
      shape: {
        type: "integer"
      }
    },
    ObjectsTransferred: {
      shape: {
        type: "integer"
      }
    },
    TotalBytes: {
      shape: {
        type: "integer"
      }
    },
    TotalObjects: {
      shape: {
        type: "integer"
      }
    }
  }
};
