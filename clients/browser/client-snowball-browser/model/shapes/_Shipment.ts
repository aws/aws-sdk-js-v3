import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Shipment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Status: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrackingNumber: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
