import { _ReservedElasticsearchInstanceList } from "./_ReservedElasticsearchInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedElasticsearchInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      }
    },
    ReservedElasticsearchInstances: {
      shape: _ReservedElasticsearchInstanceList
    }
  }
};
