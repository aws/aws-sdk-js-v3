import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Bucket: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
