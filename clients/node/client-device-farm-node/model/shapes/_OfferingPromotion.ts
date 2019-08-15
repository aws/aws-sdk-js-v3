import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OfferingPromotion: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    id: {
      shape: {
        type: "string",
        min: 4
      }
    },
    description: {
      shape: {
        type: "string"
      }
    }
  }
};
