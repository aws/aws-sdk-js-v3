import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    inputName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    inputDescription: {
      shape: {
        type: "string"
      }
    },
    inputArn: {
      shape: {
        type: "string"
      }
    },
    creationTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdateTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
