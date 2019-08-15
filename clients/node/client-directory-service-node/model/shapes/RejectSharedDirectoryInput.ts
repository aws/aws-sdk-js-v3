import { Structure as _Structure_ } from "@aws-sdk/types";

export const RejectSharedDirectoryInput: _Structure_ = {
  type: "structure",
  required: ["SharedDirectoryId"],
  members: {
    SharedDirectoryId: {
      shape: {
        type: "string"
      }
    }
  }
};
