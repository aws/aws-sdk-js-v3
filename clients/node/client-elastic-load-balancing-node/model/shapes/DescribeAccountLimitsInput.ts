import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAccountLimitsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    PageSize: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
