import { _ConstraintDetail } from "./_ConstraintDetail";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConstraintOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConstraintDetail: {
      shape: _ConstraintDetail
    },
    ConstraintParameters: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
