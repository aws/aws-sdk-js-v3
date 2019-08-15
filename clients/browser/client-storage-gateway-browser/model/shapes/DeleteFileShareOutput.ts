import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteFileShareOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FileShareARN: {
      shape: {
        type: "string",
        min: 50
      }
    }
  }
};
