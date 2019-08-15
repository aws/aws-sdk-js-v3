import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TerminationHealth: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      }
    },
    Source: {
      shape: {
        type: "string"
      }
    }
  }
};
