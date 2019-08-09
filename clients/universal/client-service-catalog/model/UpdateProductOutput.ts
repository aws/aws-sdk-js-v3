import { _ProductViewDetail } from "./_ProductViewDetail";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateProductOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductViewDetail: {
      shape: _ProductViewDetail
    },
    Tags: {
      shape: _Tags
    }
  }
};
