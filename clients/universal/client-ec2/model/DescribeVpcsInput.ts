import { _FilterList } from "./_FilterList";
import { _VpcIdStringList } from "./_VpcIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    VpcIds: {
      shape: _VpcIdStringList,
      locationName: "VpcId"
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
