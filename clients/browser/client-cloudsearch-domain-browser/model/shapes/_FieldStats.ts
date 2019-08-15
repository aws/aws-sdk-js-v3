import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FieldStats: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    min: {
      shape: {
        type: "string"
      }
    },
    max: {
      shape: {
        type: "string"
      }
    },
    count: {
      shape: {
        type: "integer"
      }
    },
    missing: {
      shape: {
        type: "integer"
      }
    },
    sum: {
      shape: {
        type: "float"
      }
    },
    sumOfSquares: {
      shape: {
        type: "float"
      }
    },
    mean: {
      shape: {
        type: "string"
      }
    },
    stddev: {
      shape: {
        type: "float"
      }
    }
  }
};
