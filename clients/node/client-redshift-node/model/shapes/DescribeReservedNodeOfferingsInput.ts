import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedNodeOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedNodeOfferingId: {
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
