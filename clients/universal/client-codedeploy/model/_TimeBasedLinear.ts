import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimeBasedLinear: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    linearPercentage: {
      shape: {
        type: "integer"
      }
    },
    linearInterval: {
      shape: {
        type: "integer"
      }
    }
  }
};
