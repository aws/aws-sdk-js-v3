import { _FilterList } from "./_FilterList";
import { _SpotInstanceRequestIdList } from "./_SpotInstanceRequestIdList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotInstanceRequestsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    SpotInstanceRequestIds: {
      shape: _SpotInstanceRequestIdList,
      locationName: "SpotInstanceRequestId"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
