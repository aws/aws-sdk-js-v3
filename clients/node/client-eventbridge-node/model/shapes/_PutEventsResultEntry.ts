import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PutEventsResultEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EventId: {
      shape: {
        type: "string"
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
