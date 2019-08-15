import { _FilterList } from "./_FilterList";
import { _InstanceTypeList } from "./_InstanceTypeList";
import { _ProductDescriptionList } from "./_ProductDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotPriceHistoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EndTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "endTime"
    },
    InstanceTypes: {
      shape: _InstanceTypeList,
      locationName: "InstanceType"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    ProductDescriptions: {
      shape: _ProductDescriptionList,
      locationName: "ProductDescription"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    }
  }
};
