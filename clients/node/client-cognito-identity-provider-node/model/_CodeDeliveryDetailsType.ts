import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeDeliveryDetailsType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Destination: {
      shape: {
        type: "string"
      }
    },
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
