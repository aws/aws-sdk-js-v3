import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductViewAggregationValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Value: {
      shape: {
        type: "string"
      }
    },
    ApproximateCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
