import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Session: _Structure_ = {
  type: "structure",
  required: ["StartTimestamp", "Id"],
  members: {
    Duration: {
      shape: {
        type: "integer"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    StartTimestamp: {
      shape: {
        type: "string"
      }
    },
    StopTimestamp: {
      shape: {
        type: "string"
      }
    }
  }
};
