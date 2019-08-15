import { Structure as _Structure_ } from "@aws-sdk/types";

export const BackupNotFound: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "BackupNotFound"
};
