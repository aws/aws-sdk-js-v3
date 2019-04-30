import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PutRecordsResultEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SequenceNumber: {
      shape: {
        type: "string"
      }
    },
    ShardId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
