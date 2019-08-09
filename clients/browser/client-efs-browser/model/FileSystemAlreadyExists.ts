import { Structure as _Structure_ } from "@aws-sdk/types";

export const FileSystemAlreadyExists: _Structure_ = {
  type: "structure",
  required: ["ErrorCode", "FileSystemId"],
  members: {
    ErrorCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Message: {
      shape: {
        type: "string"
      }
    },
    FileSystemId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "FileSystemAlreadyExists"
};
