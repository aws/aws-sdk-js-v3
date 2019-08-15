import { _ReservedCacheNodesOfferingList } from "./_ReservedCacheNodesOfferingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedCacheNodesOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedCacheNodesOfferings: {
      shape: _ReservedCacheNodesOfferingList
    }
  }
};
