import { _ProductViewSummary } from "./_ProductViewSummary";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductViewDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewSummary: {
      shape: _ProductViewSummary
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    ProductARN: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
