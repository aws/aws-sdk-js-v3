import { Structure as _Structure_ } from "@aws-sdk/types";

export const _USD: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Dollars: {
      shape: {
        type: "integer"
      }
    },
    Cents: {
      shape: {
        type: "integer"
      }
    },
    TenthFractionsOfACent: {
      shape: {
        type: "integer"
      }
    }
  }
};
