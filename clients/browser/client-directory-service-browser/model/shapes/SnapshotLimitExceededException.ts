import { Structure as _Structure_ } from "@aws-sdk/types";

export const SnapshotLimitExceededException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "SnapshotLimitExceededException"
};
