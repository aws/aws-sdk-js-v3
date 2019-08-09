import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedCacheNodesOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedCacheNodesOfferingId: {
      shape: {
        type: "string"
      }
    },
    CacheNodeType: {
      shape: {
        type: "string"
      }
    },
    Duration: {
      shape: {
        type: "string"
      }
    },
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    OfferingType: {
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
