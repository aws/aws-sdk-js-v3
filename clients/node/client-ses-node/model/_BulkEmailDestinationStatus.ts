import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BulkEmailDestinationStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string"
      }
    },
    Error: {
      shape: {
        type: "string"
      }
    },
    MessageId: {
      shape: {
        type: "string"
      }
    }
  }
};
