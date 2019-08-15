import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservedNodeExchangeOfferingsInput: _Structure_ = {
  type: "structure",
  required: ["ReservedNodeId"],
  members: {
    ReservedNodeId: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
