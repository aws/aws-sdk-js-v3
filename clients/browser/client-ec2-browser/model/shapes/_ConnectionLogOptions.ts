import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionLogOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    CloudwatchLogGroup: {
      shape: {
        type: "string"
      }
    },
    CloudwatchLogStream: {
      shape: {
        type: "string"
      }
    }
  }
};
