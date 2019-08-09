import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Attachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fileName: {
      shape: {
        type: "string"
      }
    },
    data: {
      shape: {
        type: "blob"
      }
    }
  }
};
