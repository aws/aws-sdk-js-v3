import { _FilterList } from "./_FilterList";
import { _SubnetIdStringList } from "./_SubnetIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSubnetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    SubnetIds: {
      shape: _SubnetIdStringList,
      locationName: "SubnetId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};
