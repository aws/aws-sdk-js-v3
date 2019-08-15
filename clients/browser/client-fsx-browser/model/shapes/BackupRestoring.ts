import { Structure as _Structure_ } from "@aws-sdk/types";

export const BackupRestoring: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    FileSystemId: {
      shape: {
        type: "string",
        min: 11
      }
    }
  },
  exceptionType: "BackupRestoring"
};
