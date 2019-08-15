import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SummarizedCounter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Max: {
      shape: {
        type: "float"
      }
    },
    Average: {
      shape: {
        type: "float"
      }
    },
    Sum: {
      shape: {
        type: "float"
      }
    },
    N: {
      shape: {
        type: "integer"
      }
    },
    Unit: {
      shape: {
        type: "string"
      }
    }
  }
};
