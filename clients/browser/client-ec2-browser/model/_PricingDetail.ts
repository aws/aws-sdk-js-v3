import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PricingDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Count: {
      shape: {
        type: "integer"
      },
      locationName: "count"
    },
    Price: {
      shape: {
        type: "float"
      },
      locationName: "price"
    }
  }
};
