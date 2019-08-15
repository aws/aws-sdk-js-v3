import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Bucket: {
      shape: {
        type: "string"
      }
    },
    Key: {
      shape: {
        type: "string"
      }
    }
  }
};
