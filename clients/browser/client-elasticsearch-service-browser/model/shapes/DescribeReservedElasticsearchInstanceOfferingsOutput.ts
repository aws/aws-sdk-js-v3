import { _ReservedElasticsearchInstanceOfferingList } from "./_ReservedElasticsearchInstanceOfferingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedElasticsearchInstanceOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ReservedElasticsearchInstanceOfferings: {
      shape: _ReservedElasticsearchInstanceOfferingList
    }
  }
};
