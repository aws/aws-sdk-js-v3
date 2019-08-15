import { _FilterList } from "./_FilterList";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMovingAddressesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    PublicIps: {
      shape: _ValueStringList,
      locationName: "publicIp"
    }
  }
};
