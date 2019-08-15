import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProductCode: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductCodeId: {
      shape: {
        type: "string"
      },
      locationName: "productCode"
    },
    ProductCodeType: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
