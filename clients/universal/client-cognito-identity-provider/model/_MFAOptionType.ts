import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MFAOptionType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryMedium: {
      shape: {
        type: "string"
      }
    },
    AttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
