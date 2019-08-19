import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductCode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Code: {
      shape: {
        type: "string"
      },
      locationName: "code"
    },
    ProductType: {
      shape: {
        type: "string"
      },
      locationName: "productType"
    }
  }
};
