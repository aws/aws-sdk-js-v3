import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    version: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    updated: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
