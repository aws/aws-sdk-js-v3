import { _Shipment } from "./_Shipment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ShippingDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ShippingOption: {
      shape: {
        type: "string"
      }
    },
    InboundShipment: {
      shape: _Shipment
    },
    OutboundShipment: {
      shape: _Shipment
    }
  }
};
